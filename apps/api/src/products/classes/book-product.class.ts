import Book from './book.class';

export type BookProductParams = {
  id: string;
  book: Book;
  isPublic: boolean;
  bolivaresPrice: number;
  dollarsPrice: number;
  hasStock: boolean;
  stock: number;
};
export default class BookProduct {
  public id: string;
  public book: Book;
  public isPublic: boolean;
  public bolivaresPrice: number;
  public dollarsPrice: number;
  public hasStock: boolean;
  public stock: number;

  constructor(params: BookProductParams) {
    const {
      id,
      book,
      isPublic,
      bolivaresPrice,
      dollarsPrice,
      hasStock,
      stock,
    } = params;
    this.id = id;
    this.book = book;
    this.isPublic = isPublic;
    this.bolivaresPrice = bolivaresPrice;
    this.dollarsPrice = dollarsPrice;
    this.hasStock = hasStock;
    this.stock = stock;
  }
}
