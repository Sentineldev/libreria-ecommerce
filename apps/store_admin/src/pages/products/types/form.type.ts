export type BookFormFields = {
    title: string;
    synopsis: string;
    releaseDate: string;
    genre: string;
    author: string;
    language: string;
    pageCount: string;
    imageUrl: string;
    physicalVersion: boolean;
    digitalVersion: boolean;
}
export type BookProductFormFields = {
    dollarsPrice: string;
    bolivaresPrice: string;
    stock: string;
}