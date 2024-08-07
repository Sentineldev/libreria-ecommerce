import { useEffect, useState } from "react";
import { IncomingOrderDto } from "../../../http/orders/orders.dto";
import OrdersApi from "../../../http/orders/orders.api";

export type useAccountOrdersProps = {
    accountId: string;
}
export default function useAccountOrders({ accountId }: useAccountOrdersProps) {



    const [orders, setOrders] = useState<IncomingOrderDto[]>([]);

    const [loading, setLoading] = useState(false);

    const [fetch, setFetch] = useState(true);


    useEffect(() => {
        const load = async () => {
            const api = new OrdersApi();

            setLoading(true);
            const response = await api.getOrders(accountId);
            if (response.status === 200) {
                setOrders(response.data);
            }
            setLoading(false);
            setFetch(false);
        };

        if (fetch) {
            load();
        }
    },[fetch, accountId])

    return { orders, loading, setFetch }
}