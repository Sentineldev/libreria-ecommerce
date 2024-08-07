import Order from '../classes/order.class';
import { OutGoingOrderDto } from '../dto/order.dto';
import { OrderEntity } from '../entities/order.entity';
import AccountMapper from 'src/accounts/mapper/account.mapper';

export default class OrderMapper {
  public static ToEntity(order: Order): OrderEntity {
    return OrderEntity.New({
      ...order,
      accountId: order.account.id,
    });
  }

  public static ToEntities(orders: Order[]): OrderEntity[] {
    return orders.map((order) => this.ToEntity(order));
  }

  public static FromEntity(orderEntity: OrderEntity): Order {
    return new Order({
      ...orderEntity,
      account: AccountMapper.FromEntitty(orderEntity.account),
    });
  }

  public static FromEntities(orderEntities: OrderEntity[]): Order[] {
    return orderEntities.map((orderEntity) => this.FromEntity(orderEntity));
  }

  public static ToOutGoingDto(order: Order): OutGoingOrderDto {
    return {
      ...order,
      account: AccountMapper.ToOutGoingDto(order.account),
    };
  }

  public static ToOutGoingDtos(orders: Order[]): OutGoingOrderDto[] {
    return orders.map((order) => this.ToOutGoingDto(order));
  }
}
