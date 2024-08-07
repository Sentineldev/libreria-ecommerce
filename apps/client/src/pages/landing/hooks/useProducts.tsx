import { useEffect, useState } from "react";
import { IncomingBookProductDto } from "../../../http/orders/orders.dto";
import ProductApi from "../../../http/product.api";

export default function useProducts() {



    const [products, setProducts] = useState<IncomingBookProductDto[]>([]);

    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);



    useEffect(() => {


        const load = async () => {

            const api = new ProductApi();
            setLoading(true);
            const response = await api.getProducts();
            setLoading(false);
            if (response.status === 200) {
                setProducts(response.data);
            }
            setFetch(false);
        }
        if (fetch) {

            load();
        }
    },[fetch])

    return { products, loading, setFetch };
}