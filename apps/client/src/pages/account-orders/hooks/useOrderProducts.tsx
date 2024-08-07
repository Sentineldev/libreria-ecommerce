import { useEffect, useState } from "react";
import { IncomingOrderProductDto } from "../../../http/orders/orders.dto";
import OrdersApi from "../../../http/orders/orders.api";


export type useOrderProductsProps = {
    orderId: string;
} 
export default function useOrderProducts({ orderId }: useOrderProductsProps) {



    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [products, setProducts] = useState<IncomingOrderProductDto[]>([]);


    useEffect(() => {

        const load = async () => {

            const api = new OrdersApi();


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