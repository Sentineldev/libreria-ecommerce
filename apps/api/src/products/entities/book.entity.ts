import { Column, Entity, PrimaryColumn } from 'typeorm';

export type BookEntityParams = {
  id: string;
  title: string;
  synopsis: string;
  genre: string;
  imageUrl: string;
  physicalVersion: boolean;
  digitalVersion: boolean;
  releaseDate: Date;
  pageCount: number;
  language: string;
  author: string;
};

@Entity({ name: 'book' })
export default class BookEntity {
  @PrimaryColumn('text', { name: 'id' })
  public id: string;

  @Column('text', { name: 'title', nullable: false })
  public title: string;

  @Column('text', { name: 'synopsis', nullable: false })
  public synopsis: string;

  @Column('text', { name: 'genre', nullable: false })
  public genre: string;

  @Column('text', { name: 'image_url', nullable: false })
  public imageUrl: string;

  @Column('boolean', { name: 'physical_version', nullable: false })
  public physicalVersion: boolean;

  @Column('boolean', { name: 'digital_version', nullable: false })
  public digitalVersion: boolean;

  @Column('date', { name: 'release_date', nullable: false })
  public releaseDate: Date;

  @Column('int', { name: 'page_count', nullable: false })
  public pageCount: number;

  @Column('text', { name: 'language', nullable: false })
  public language: string;

  @Column('text', { name: 'author', nullable: false })
  public author: string;

  public static New(params: BookEntityParams): BookEntity {
    const {
      id,
      title,
      synopsis,
      author,
      digitalVersion,
      genre,
      imageUrl,
      language,
      pageCount,
      physicalVersion,
      releaseDate,
    } = params;
    const entity = new BookEntity();
    entity.id = id;
    entity.title = title;
    entity.synopsis = synopsis;
    entity.genre = genre;
    entity.imageUrl = imageUrl;
    entity.physicalVersion = physicalVersion;
    entity.digitalVersion = digitalVersion;

    entity.author = author;
    entity.language = language;
    entity.pageCount = pageCount;
    entity.releaseDate = releaseDate;
    return entity;
  }
}
