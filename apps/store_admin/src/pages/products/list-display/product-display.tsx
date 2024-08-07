import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingBookProductDto } from "../../../api/product.type"
import { useState } from "react";
import ProductsApi from "../../../api/products.api";
import { NavLink } from "react-router-dom";
import Spinner from "../../../components/spinner";

export type ProductDisplayProps = {
    productData: IncomingBookProductDto;
}
export default function ProductDisplay({ productData }: ProductDisplayProps) {



    const [product, setProduct] = useState<IncomingBookProductDto>(productData);

    const [loading, setLoading] = useState(false);

    async function OnPublishHandler() {
        const api = new ProductsApi();

        setLoading(true);
        const response = await api.update(product.id, {
            ...product.book,
            ...product,
            isPublic: !product.isPublic,
            genre: product.book.genre.split(","),
            language: product.book.language.split(","),
            author: product.book.author.split(","),
        })
        if (response.status === 200) {
            product.isPublic = !product.isPublic;
            setProduct(product);
        }
        setLoading(false);
    }

    return (
        <div className="grid grid-cols-7 items-center gap-4 p-4 py-6 border-b">
            <div className="flex items-center gap-2 col-span-2">
                <div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src={product.book.imageUrl}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <NavLink to={`${product.id}`} className={`link link-primary`} >{product.book.title}</NavLink>
                    <p className="opacity-70">{product.book.digitalVersion ? "Digital" : "Fisico" }</p>
                </div>
            </div>
            <div>
                <p>{product.stock}</p>
            </div>
            <div>
                <p>{product.dollarsPrice}</p>
            </div>
            <div>
                <p>{product.bolivaresPrice}</p>
            </div>
            <div className="">
                { loading ?
                <Spinner/>
                :

                <div className={` ${product.isPublic ? "bg-success" : "bg-error"} flex items-center w-fit p-1 px-2  rounded-lg gap-2`}>
                    <p>
                        {product.isPublic ? "Publico" : "Oculto"}
                    </p>
                    <div className="tooltip" data-tip={!product.isPublic ? "Publicar": "Ocultar"}>
                        {
                            !product.isPublic ?
                            <button onClick={OnPublishHandler} className="btn btn-xs btn-outline border-none">
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                            :
                            <button onClick={OnPublishHandler} className="btn btn-xs btn-outline border-none">
                                <FontAwesomeIcon icon={faX}/>
                            </button>
                        }
                    </div> 
                </div>
                }
            </div>
        </div>

    );

}