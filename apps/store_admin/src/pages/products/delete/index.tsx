import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IncomingBookProductDto } from "../../../api/product.type";
import ProductsApi from "../../../api/products.api";
import ProductBookCard from "../display/book-card";
import SpinnerCentered from "../../../components/spinner-centered";
import BaseLayout from "../../../layout/base";

export default function DeleteProductIndex() {
    const { id } = useParams();

    const [product, setProduct] = useState<IncomingBookProductDto>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {

            if (!id) return;

            const api = new ProductsApi();

            const response = await api.getById(id);
            if (response.status === 200) {
                const data: IncomingBookProductDto = response.data;
                setProduct(data);
            }
            setLoading(false);
        }
        load();
    },[id])


    async function onDeleteHandler() {
        if (!id) return;
        const api = new ProductsApi();

        const response = await api.delete(id);

        if (response.status === 200) {
            setLoading(true);
            setTimeout(() => {
                window.location.href = "/inventory/products";
            }, 1000);

        }
    }

    return (
        <BaseLayout>
            <div className="p-12">
                
                { loading && <SpinnerCentered/> }
                { product && !loading && (
                    <div className="flex flex-col gap-8">
                        <h1 className="font-bold text-2xl">Eliminar Producto</h1>
                        <ProductBookCard product={product}/>
                        <button onClick={onDeleteHandler} className="btn btn-error">Eliminar</button>
                    </div>
                ) }

            </div>
        </BaseLayout>
    );
}