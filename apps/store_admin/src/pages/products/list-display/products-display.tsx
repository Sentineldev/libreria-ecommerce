import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductDisplay from "./product-display";
import SpinnerCentered from "../../../components/spinner-centered";

export default function ProductsDisplay() {
    const { products, loading } = useProducts();

    const [productList, setProductList] = useState(products);


    useEffect(() => {

        if (products.length > 0) {
            setProductList(products.sort((a,b) => a.book.title > b.book.title ? 1 : -1));
        }
    },[products])
    
    if (loading) {
        return <SpinnerCentered/>
    }

    return (
        <div className="bg-white shadow-2xl p-12 py-6 flex flex-col gap-6 border rounded-md max-h-[650px] h-[650px]">
            <div>
                <h1 className="font-bold text-2xl">Productos</h1>
            </div>
            <div className="flex flex-col">
                <div>
                    <div className="grid grid-cols-7 gap-4 bg-primary p-4 items-center">
                        <div className="col-span-2">
                            <h1 className="text-lg text-primary-content ">Libro</h1>
                        </div>
                        <div>
                            <h1 className="text-lg text-primary-content">Stock</h1>
                        </div>
                        <div>
                            <h1 className="text-lg text-primary-content">Precio Dolares</h1>
                        </div>
                        <div>
                            <h1 className="text-lg text-primary-content">Precio Bolivares</h1>
                        </div>
                        <div>
                            <h1 className="text-lg text-primary-content"></h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    { productList.map((product, index) => (
                        <ProductDisplay productData={product} key={`unique-book-display-idnex=${index}`}/>
                    )) }
                </div>
            </div>
        </div>
    );
}