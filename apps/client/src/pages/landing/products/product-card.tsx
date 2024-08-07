import { IncomingBookProductDto } from "../../../http/orders/orders.dto"
import AddToCartButton from "./add-to-cart-button";

export type ProductCardProps = {
    product: IncomingBookProductDto;
}
export default function ProductCard({ product }: ProductCardProps) {



    return (
        <div className="card glass w-96">
            <figure className="w-96 h-[340px] relative">
                <img
                src={product.book.imageUrl}
                alt="car!" />
                <div className="h-full w-full absolute bg-[rgba(0,0,0,0.5)] flex flex-col">
                    <div className="p-4">
                        <h1 className="font-bold text-[1.4rem] text-white">{product.book.title}</h1>
                        <p className="text-white text-[1.2rem]">{product.book.digitalVersion ? "Digital" : "Fisico"}</p>
                    </div>
                    <div className="grid grid-cols-2 items-end p-4 flex-1">
                        <p className="text-white text-xl font-bold"> $ {product.bolivaresPrice}</p>
                        <p className="text-white text-end text-xl font-bold">Bs {product.dollarsPrice}</p>
                    </div>
                </div>
            </figure>
            <div className="card-body">
                {/* <h2 className="card-title">{product.book.title}</h2> */}
                <p>{product.book.synopsis}</p>
                <div className="card-actions justify-end">
                <AddToCartButton product={product}/>
                </div>
            </div>
        </div>
    );
}