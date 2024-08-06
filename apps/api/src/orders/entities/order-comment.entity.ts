import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { OrderEntity } from './order.entity';
export type OrderCommentEntityParams = {
  id: string;
  orderId: string;
  createdAt: Date;
  fromCustomer: boolean;
  body: string;
};

@Entity({ name: 'order_comment' })
export default class OrderCommentEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @PrimaryColumn('text', { name: 'order_id' })
  public orderId: string;

  @Column('text', { name: 'body' })
  public body: string;

  @Column('timestamp', { name: 'created_at' })
  public createdAt: Date;

  @Column('boolean', { name: 'from_customer' })
  public fromCustomer: boolean;

  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  public order: OrderEntity;

  public static New(params: OrderCommentEntityParams) {
    const { createdAt, fromCustomer, id, orderId, body } = params;
    const entity = new OrderCommentEntity();

    entity.id = id;
    entity.orderId = orderId;
    entity.fromCustomer = fromCustomer;
    entity.body = body;
    entity.createdAt = createdAt;
    return entity;
  }
}
