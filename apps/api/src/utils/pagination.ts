import PageDataMeta from 'src/classes/page-data-meta.class';
import PageData from 'src/classes/page-data.class';
import PageQuery from 'src/classes/page-query.class';
import { SelectQueryBuilder } from 'typeorm';

export default class PaginationUtils {
  public static async GetPageFromQueryBuilder<T>(
    builder: SelectQueryBuilder<T>,
    pageQuery: PageQuery,
  ) {
    const { page, pageSize } = pageQuery;

    const totalData = await builder.getCount();

    const pageCount = Math.ceil(totalData / pageSize);

    const meta = new PageDataMeta({
      page,
      pageSize,
      pageCount,
      totalData,
    });

    builder.skip((page - 1) * pageSize);
    builder.take(pageSize);

    const data = await builder.getMany();
    return new PageData(data, meta);
  }
}
