import { useEffect, useState } from "react";
import { IncomingOrderDto } from "../../../api/orders.type";
import OrderApi from "../../../api/orders.api";

export default function useOrders() {



    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [orders, setOrders] = useState<IncomingOrderDto[]>([]);


    useEffect(() => {

        const load = async () => {

            const api = new OrderApi();


            setLoading(true);
            const response = await api.getAll();

            if (response.status === 200) {
                setOrders(response.data);
            }
            setFetch(false);
            setLoading(false);

        }
        if (fetch) {
            load();
        }
    },[fetch])


    return { orders, loading, setFetch };
}