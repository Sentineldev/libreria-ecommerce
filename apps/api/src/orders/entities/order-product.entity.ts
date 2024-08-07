import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import BookProductEntity from 'src/products/entities/book-product.entity';

export type OrderProductEntityParams = {
  productId: string;
  orderId: string;
  quantity: number;
  totalBolivares: number;
  totalDollars: number;
};

@Entity({ name: 'order_book_product' })
export default class OrderProductEntity {
  @PrimaryColumn('text', { name: 'product_id' })
  public productId: string;
  @PrimaryColumn('text', { name: 'order_id' })
  public orderId: string;

  @Column('int', { name: 'quantity' })
  public quantity: number;

  @Column('float', { name: 'total_bolivares' })
  public totalBolivares: number;

  @Column('float', { name: 'total_dollars' })
  public totalDollars: number;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  public order: OrderEntity;

  @OneToOne(() => BookProductEntity)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  public product: BookProductEntity;

  public static New(params: OrderProductEntityParams) {
    const { orderId, productId, quantity, totalBolivares, totalDollars } =
      params;
    const entity = new OrderProductEntity();

    entity.productId = productId;
    entity.orderId = orderId;
    entity.quantity = quantity;
    entity.totalBolivares = totalBolivares;
    entity.totalDollars = totalDollars;
    return entity;
  }
}
