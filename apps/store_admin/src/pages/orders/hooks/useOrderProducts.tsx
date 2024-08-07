import { useEffect, useState } from "react";
import { IncomingOrderProductDto } from "../../../api/orders.type";
import OrderApi from "../../../api/orders.api";


export type useOrderProductsProps = {
    orderId: string;
} 
export default function useOrderProducts({ orderId }: useOrderProductsProps) {



    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [products, setProducts] = useState<IncomingOrderProductDto[]>([]);


    useEffect(() => {

        const load = async () => {

            const api = new OrderApi();


            setLoading(true);
            const response = await api.getProducts(orderId);

            if (response.status === 200) {
                setProducts(response.data);
            }
            setFetch(false);
            setLoading(false);

        }
        if (fetch) {
            load();
        }
    },[fetch, orderId])


    return { products, loading, setFetch };
}