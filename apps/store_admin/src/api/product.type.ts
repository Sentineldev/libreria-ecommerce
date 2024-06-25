export type RegisterBookProductDto = {
    title: string;
    synopsis: string;
    imageUrl: string;
    physicalVersion: boolean;
    digitalVersion: boolean;
    releaseDate: string;
    pageCount: number;
    language: string[];
    genre: string[];
    author: string[];
    bolivaresPrice: number;
    dollarsPrice: number;
    stock: number;
}

export type UpdateBookProductDto = RegisterBookProductDto & {
    isPublic: boolean;
}

export type IncomingBookDto = {
    id: string;
    title: string;
    synopsis: string;
    imageUrl: string;
    physicalVersion: boolean;
    digitalVersion: boolean;
    releaseDate: string;
    pageCount: number;
    // language: string[];
    // author: string[];
    // genre: string[];
    language: string;
    genre: string;
    author: string;
   

}

export type IncomingBookProductDto = {
    id: string;
    book: IncomingBookDto;
    bolivaresPrice: number;
    dollarsPrice: number;
    hasStock: boolean;
    isPublic: boolean;
    stock: number;
}