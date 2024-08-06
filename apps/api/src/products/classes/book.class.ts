export type BookParams = {
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
export default class Book {
  public id: string;
  public title: string;
  public synopsis: string;
  public genre: string;
  public imageUrl: string;
  public physicalVersion: boolean;
  public digitalVersion: boolean;
  public releaseDate: Date;
  public pageCount: number;
  public language: string;
  public author: string;

  constructor(params: BookParams) {
    const {
      id,
      title,
      synopsis,
      genre,
      imageUrl,
      physicalVersion,
      digitalVersion,
      releaseDate,
      pageCount,
      language,
      author,
    } = params;

    this.id = id;
    this.title = title;
    this.synopsis = synopsis;
    this.genre = genre;
    this.imageUrl = imageUrl;
    this.physicalVersion = physicalVersion;
    this.digitalVersion = digitalVersion;
    this.releaseDate = releaseDate;
    this.pageCount = pageCount;
    this.language = language;
    this.author = author;
  }

  public static DigitalBook(params: BookParams) {
    const instance = new Book(params);
    instance.digitalVersion = true;
    instance.physicalVersion = false;

    return instance;
  }

  public static PhysicalBook(params: BookParams) {
    const instance = new Book(params);
    instance.digitalVersion = false;
    instance.physicalVersion = true;
    return instance;
  }

  getAuthors(): string[] {
    return this.author.split(',');
  }
  getLanguages(): string[] {
    return this.language.split(',');
  }
  getGenders(): string[] {
    return this.genre.split(',');
  }
}
