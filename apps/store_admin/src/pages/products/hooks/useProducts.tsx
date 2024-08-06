import { useEffect, useState } from "react"
import ProductsApi from "../../../api/products.api";
import { IncomingBookProductDto } from "../../../api/product.type";

export default function useProducts() {


    const [products, setProducts] = useState<IncomingBookProductDto[]>([]);

    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    useEffect(() => {


        const load = async () => {

            const api = new ProductsApi();

            setLoading(true);
            const response = await api.getProducts();
            if (response.status === 200) {
                setProducts(response.data);
            }
            setLoading(false);
        }
        if (fetch) {
            load();

        }
    },[fetch])

    return { products, loading, setFetch }

}