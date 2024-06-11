import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import BookEntity from './book.entity';

export type BookProductEntityParams = {
  id: string;
  bookId: string;
  isPublic: boolean;
  bolivaresPrice: number;
  dollarsPrice: number;
  hasStock: boolean;
  stock: number;
};

@Entity({ name: 'book_product' })
export default class BookProductEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @Column('text', { name: 'book_id', nullable: false })
  public bookId: string;

  @Column('boolean', { name: 'is_public', nullable: false })
  public isPublic: boolean;

  @Column('int', { name: 'stock', nullable: false })
  public stock: number;

  @Column('boolean', { name: 'has_stock', nullable: false })
  public hasStock: boolean;

  @Column('float', { name: 'bolivares_price', nullable: false })
  public bolivaresPrice: number;

  @Column('float', { name: 'dollars_price', nullable: false })
  public dollarsPrice: number;

  @OneToOne(() => BookEntity)
  @JoinColumn({ name: 'book_id', referencedColumnName: 'id' })
  public book: BookEntity;

  public static New(params: BookProductEntityParams): BookProductEntity {
    const {
      id,
      bolivaresPrice,
      bookId,
      dollarsPrice,
      hasStock,
      isPublic,
      stock,
    } = params;
    const entity = new BookProductEntity();
    entity.id = id;
    entity.bookId = bookId;
    entity.isPublic = isPublic;
    entity.stock = stock;
    entity.hasStock = hasStock;
    entity.bolivaresPrice = bolivaresPrice;
    entity.dollarsPrice = dollarsPrice;

    return entity;
  }
}
