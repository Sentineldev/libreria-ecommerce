import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BookEntity from './entities/book.entity';
import BookProductEntity from './entities/book-product.entity';
import ProductService from './product.service';
import ProductController from './product.controller';
import BookProductRepository from './repositories/book-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, BookProductEntity])],
  controllers: [ProductController],
  providers: [ProductService, BookProductRepository],
  exports: [BookProductRepository],
})
export class ProductModule {}
