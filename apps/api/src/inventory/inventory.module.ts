import { Module } from '@nestjs/common';
import { ProductModule } from 'src/products/product.module';

@Module({
  imports: [ProductModule],
})
export class InventoryModule {}
