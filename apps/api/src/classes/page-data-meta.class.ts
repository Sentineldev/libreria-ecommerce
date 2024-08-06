import { ApiProperty } from '@nestjs/swagger';

export type PageDataMetaParams = {
  page: number;
  pageSize: number;
  pageCount: number;
  totalData: number;
};
export default class PageDataMeta {
  @ApiProperty({ type: Number })
  public page: number;
  @ApiProperty({ type: Number })
  public pageSize: number;
  @ApiProperty({ type: Number })
  public pageCount: number;
  @ApiProperty({ type: Number })
  public totalData: number;

  constructor(params: PageDataMetaParams) {
    const { page, pageCount, pageSize, totalData } = params;

    this.page = page;
    this.pageCount = pageCount;
    this.pageSize = pageSize;
    this.totalData = totalData;
  }
}
