import { useEffect, useState } from "react";
import { IncomingOrderDto } from "../../../http/orders/orders.dto";
import OrdersApi from "../../../http/orders/orders.api";

export type useOrderProps = {
    id: string;
}
export default function useOrder({ id }: useOrderProps) {



    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [order, setOrder] = useState<IncomingOrderDto>();


    useEffect(() => {

        const load = async () => {

            const api = new OrdersApi();


            setLoading(true);
            const response = await api.getById(id);

            if (response.status === 200) {
                setOrder(response.data);
            }
            setFetch(false);
            setLoading(false);

        }
        if (fetch) {
            load();
        }
    },[fetch, id])


    return { order, loading, setFetch };
}