import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateBookProductDto,
  UpdateBookProductDto,
} from './dto/book-product.dto';
import BookProduct from './classes/book-product.class';
import { GenerateUuid } from '../utils/uuid';
import Book from './classes/book.class';
import BookProductRepository from './repositories/book-product.entity';

//TO-DO: Verificar problema con las fechas. 2024-01-01 lo convierte a 2023-12-30
@Injectable()
export default class ProductService {
  constructor(private readonly repository: BookProductRepository) {}

  async create(body: CreateBookProductDto): Promise<BookProduct> {
    const newBook = new Book({
      id: GenerateUuid(),
      ...body,
      author: body.author.join(','),
      language: body.language.join(','),
      genre: body.genre.join(','),
      releaseDate: new Date(body.releaseDate),
    });
    const newProduct = new BookProduct({
      id: GenerateUuid(),
      ...body,
      book: newBook,
      isPublic: false,
      hasStock: body.stock > 0 ? true: false,
    });

    return await this.repository.create(newProduct);
  }

  async update(
    bookProductId: string,
    body: UpdateBookProductDto,
  ): Promise<BookProduct> {
    const currentProduct = await this.getById(bookProductId);

    const book = new Book({
      id: currentProduct.book.id,
      ...body,
      author: body.author.join(','),
      language: body.language.join(','),
      genre: body.genre.join(','),
      releaseDate: new Date(body.releaseDate),
    });
    const updatedProduct = new BookProduct({
      ...currentProduct,
      ...body,
      book,
    });
    updatedProduct.hasStock = updatedProduct.stock > 0 ? true : false;
    return await this.repository.create(updatedProduct);
  }

  async getBookProducts(): Promise<BookProduct[]> {
    return await this.repository.getBookProductsPage();
  }

  async getById(bookProductId: string): Promise<BookProduct> {
    const product = await this.repository.getById(bookProductId);

    if (!product) throw new NotFoundException('Producto no encontrado.');

    return product;
  }
}
