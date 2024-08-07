import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import Order from '../classes/order.class';
import OrderProduct from '../classes/order-product.class';
import OrderMapper from '../mapper/order.mapper';
import OrderProductMapper from '../mapper/order-product.mapper';
import OrderProductEntity from '../entities/order-product.entity';

@Injectable()
export default class OrderRepository {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly repository: Repository<OrderEntity>,
    @InjectRepository(OrderProductEntity)
    private readonly productRepository: Repository<OrderProductEntity>,
  ) {}

  async save(order: Order, products: OrderProduct[]) {
    const orderEntity = OrderMapper.ToEntity(order);
    const productEntities = OrderProductMapper.ToEntities(products);
    await this.repository.manager.transaction(async (entityManager) => {
      await entityManager.save(orderEntity);
      await entityManager.save(productEntities);
    });
  }
  async update(order: Order) {
    const entity = OrderMapper.ToEntity(order);
    await this.repository.save(entity);
  }

  async getById(id: string): Promise<Order | undefined> {
    const result = await this.repository.findOne({
      relations: ['account', 'account.customer'],
      where: { id },
    });
    if (!result) return undefined;

    return OrderMapper.FromEntity(result);
  }

  async getByAccount(accountId: string): Promise<Order[]> {
    const result = await this.repository.find({
      relations: ['account', 'account.customer'],
      where: { accountId },
    });
    if (!result) return undefined;

    return OrderMapper.FromEntities(result);
  }

  async getAll(): Promise<Order[]> {
    const result = await this.repository.find({
      relations: ['account', 'account.customer'],
    });

    return OrderMapper.FromEntities(result);
  }

  async getProducts(orderId: string): Promise<OrderProduct[]> {
    const result = await this.productRepository.find({
      relations: [
        'product',
        'product.book',
        'order',
        'order.account',
        'order.account.customer',
      ],
      where: { orderId },
    });
    if (!result) return undefined;
    return OrderProductMapper.FromEntities(result);
  }

  async delete(id: string) {
    await this.repository.delete(id);
  }
}
