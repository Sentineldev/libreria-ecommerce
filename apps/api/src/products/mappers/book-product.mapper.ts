import BookProduct from '../classes/book-product.class';
import BookProductEntity from '../entities/book-product.entity';
import BookMapper from './book.mapper';

export default class BookProductMapper {
  public static ToEntity(bookProduct: BookProduct): BookProductEntity {
    return BookProductEntity.New({
      ...bookProduct,
      bookId: bookProduct.book.id,
    });
  }
  public static ToEntities(bookProducts: BookProduct[]): BookProductEntity[] {
    return bookProducts.map((bookProduct) => this.ToEntity(bookProduct));
  }

  public static FromEntity(bookProductEntity: BookProductEntity): BookProduct {
    return new BookProduct({
      ...bookProductEntity,
      book: BookMapper.FromEntity(bookProductEntity.book),
    });
  }
  public static FromEntities(
    bookProductEntities: BookProductEntity[],
  ): BookProduct[] {
    return bookProductEntities.map((bookProductEntity) =>
      this.FromEntity(bookProductEntity),
    );
  }
}
