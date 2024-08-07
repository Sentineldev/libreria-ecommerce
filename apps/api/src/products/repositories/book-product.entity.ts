import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import BookProductEntity from '../entities/book-product.entity';
import { EntityManager, In, Repository } from 'typeorm';
import BookProduct from '../classes/book-product.class';
import BookProductMapper from '../mappers/book-product.mapper';
import BookMapper from '../mappers/book.mapper';

@Injectable()
export default class BookProductRepository {
  constructor(
    @InjectRepository(BookProductEntity)
    private readonly repository: Repository<BookProductEntity>,
  ) {}

  async create(bookProduct: BookProduct): Promise<BookProduct> {
    const entity = BookProductMapper.ToEntity(bookProduct);

    const bookEntity = BookMapper.ToEntity(bookProduct.book);

    await this.repository.manager.transaction(
      async (entityManager: EntityManager) => {
        await entityManager.save(bookEntity);
        await entityManager.save(entity);
      },
    );

    return bookProduct;
  }

  async getById(id: string): Promise<BookProduct | undefined> {
    const result = await this.repository.findOne({
      relations: ['book'],
      where: {
        id,
      },
    });
    if (!result) return undefined;
    return BookProductMapper.FromEntity(result);
  }

  async getByIds(ids: string[]): Promise<BookProduct[]> {
    const result = await this.repository.find({
      relations: ['book'],
      where: {
        id: In(ids),
      },
    });
    return BookProductMapper.FromEntities(result);
  }

  async getBookProductsPage(): Promise<BookProduct[]> {
    const result = await this.repository.find({
      relations: ['book'],
    });

    return BookProductMapper.FromEntities(result);
  }

  async delete(id: string) {
    await this.repository.delete({
      id,
    });
  }
}
