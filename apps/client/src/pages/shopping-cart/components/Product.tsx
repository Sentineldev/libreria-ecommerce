import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart";

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
    stock: number,
    quantity?: number,
    addToCart?: (product:PropsProduct) => void
}






export const Product = (Product:PropsProduct) => {
    const {addToCart} = useCart()

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <img className="rounded-md w-full size-72 block object-cover object-top bg-white" src={Product.book.imageUrl} alt={Product.book.title} />
            <div className="h-full w-full ">
                <div>
                    <h1 className="text-lg text-center">{Product.book.title}</h1>
                </div>
              < div className="text-center text-sm">
                    <span className="">Precio: ${Product.dollarsPrice}</span> 
                </div>
                <div className="text-center text-sm">
                    <span className="">Bolivares: {Product.bolivaresPrice}</span> 
                </div>
            </div>
            <div className="h-full w-full flex justify-center items-end pt-2"> 
                <button className="flex items-center justify-center bg-blue-500 rounded-full cursor-pointer 
                    h-14 w-16 p-1 transition-all duration-300 ease-in-out  hover:scale-110" onClick={() => addToCart(Product)}>
                        <FontAwesomeIcon icon={faCartShopping} className="size-8" />
                </button>
            </div>
        </div>
    )
}