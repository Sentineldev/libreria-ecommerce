import { useEffect, useState } from "react"
import ProductsApi from "../../../api/products.api";
import { IncomingBookProductDto } from "../../../api/product.type";

export default function useProducts() {


    const [products, setProducts] = useState<IncomingBookProductDto[]>([]);

    useEffect(() => {


        const load = async () => {

            const api = new ProductsApi();

            const response = await api.getProducts();
            if (response.status === 200) {
                setProducts(response.data);
            }
        }

        load();
    },[])

    return { products }

}