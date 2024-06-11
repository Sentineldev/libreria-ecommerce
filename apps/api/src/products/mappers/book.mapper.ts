import Book from '../classes/book.class';
import BookEntity from '../entities/book.entity';

export default class BookMapper {
  public static ToEntity(book: Book): BookEntity {
    return BookEntity.New({ ...book });
  }

  public static ToEntities(books: Book[]): BookEntity[] {
    return books.map((book) => this.ToEntity(book));
  }

  public static FromEntity(bookEntity: BookEntity): Book {
    return new Book({ ...bookEntity });
  }
  public static FromEntities(bookEntities: BookEntity[]): Book[] {
    return bookEntities.map((bookEntity) => this.FromEntity(bookEntity));
  }
}
