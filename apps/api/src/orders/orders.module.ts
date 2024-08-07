import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import OrderRepository from './repository/order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import OrderProductEntity from './entities/order-product.entity';
import { ProductModule } from 'src/products/product.module';
import { AccountsModule } from 'src/accounts/accounts.module';
import OrderCommentRepository from './repository/order-comment.repository';
import OrderCommentEntity from './entities/order-comment.entity';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrderRepository, OrderCommentRepository],
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      OrderProductEntity,
      OrderCommentEntity,
    ]),
    AccountsModule,
    ProductModule,
  ],
})
export class OrdersModule {}
