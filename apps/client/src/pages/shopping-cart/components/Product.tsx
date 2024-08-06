
type Book = {
    id: string, 
    title: string, 
    synopsis: string,
    genre: string,
    imageUrl: string,
    physicalVersion: boolean,
    digitalVersion: boolean,
    releaseDate: string,
    pageCount: number,
    language: string[],
    author: string[]; 
}

export type PropsProduct = {
    id: string,
    book: Book,
    bolivaresPrice: number,
    dollarsPrice: number,
    hasStock: boolean,
    isPublic: boolean,
    stock: number;
}


export const Product = (Product:PropsProduct) => {
    return(
        <div className="w-full flex items-center justify-center">
            <img className="size-72" src={Product.book.imageUrl} alt={Product.book.title} />
            <div className="h-full w-full">
              <h1 className="text-lg text-center">{Product.book.title}</h1>
              <div className="text-center text-sm"><span className="">Precio: ${Product.dollarsPrice}</span> </div>
              <div className="text-center text-sm"><span className="">Bolivares: {Product.bolivaresPrice}</span> </div>
            </div>
        </div>
    )
}