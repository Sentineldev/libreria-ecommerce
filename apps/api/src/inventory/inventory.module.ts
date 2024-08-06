import { Module } from '@nestjs/common';
import { OrdersModule } from 'src/orders/orders.module';
import { ProductModule } from 'src/products/product.module';

@Module({
  imports: [ProductModule, OrdersModule],
})
export class InventoryModule {}
