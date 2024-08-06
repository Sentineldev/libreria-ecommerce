import Order from './order.class';

export type OrderCommentProps = {
  id: string;
  order: Order;
  body: string;
  createdAt: Date;
  fromCustomer: boolean;
};
export default class OrderComment {
  public id: string;
  public order: Order;
  public body: string;
  public createdAt: Date;
  public fromCustomer: boolean;

  constructor(params: OrderCommentProps) {
    const { body, createdAt, fromCustomer, id, order } = params;
    this.id = id;
    this.order = order;
    this.body = body;
    this.createdAt = createdAt;
    this.fromCustomer = fromCustomer;
  }
}
