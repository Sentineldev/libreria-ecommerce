import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import OrderCommentEntity from '../entities/order-comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import OrderComment from '../classes/order-comment.class';
import OrderCommentMapper from '../mapper/order-comment.mapper';

@Injectable()
export default class OrderCommentRepository {
  constructor(
    @InjectRepository(OrderCommentEntity)
    private readonly repository: Repository<OrderCommentEntity>,
  ) {}

  async save(comment: OrderComment) {
    const entity = OrderCommentMapper.ToEntity(comment);
    await this.repository.save(entity);
  }
  async getAll(orderId: string): Promise<OrderComment[]> {
    const result = await this.repository.find({
      relations: ['order', 'order.account', 'order.account.customer'],
      where: { orderId },
      order: {
        createdAt: 'ASC',
      },
    });

    return OrderCommentMapper.FromEntities(result);
  }
}
