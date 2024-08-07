import BookProduct from 'src/products/classes/book-product.class';
import Order from './order.class';

export type OrderProductParams = {
  order: Order;
  product: BookProduct;
  quantity: number;
  totalDollars: number;
  totalBolivares: number;
};
export default class OrderProduct {
  public order: Order;
  public product: BookProduct;
  public quantity: number;
  public totalDollars: number;
  public totalBolivares: number;

  constructor(params: OrderProductParams) {
    const { order, product, quantity, totalBolivares, totalDollars } = params;
    this.order = order;
    this.product = product;
    this.quantity = quantity;
    this.totalBolivares = totalBolivares;
    this.totalDollars = totalDollars;
  }
}
