import PageDataMeta from './page-data-meta.class';

export default class PageData<T> {
  public data: Array<T>;
  public meta: PageDataMeta;

  constructor(data: Array<T>, meta: PageDataMeta) {
    this.data = data;
    this.meta = meta;
  }
}
