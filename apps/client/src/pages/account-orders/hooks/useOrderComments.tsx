import { useEffect, useState } from "react";
import { IncomingOrderCommentDto } from "../../../http/orders/orders.dto";
import OrdersApi from "../../../http/orders/orders.api";


export type useOrderCommentsProps = {
    orderId: string;
} 
export default function useOrderComments({ orderId }: useOrderCommentsProps) {



    const [loading, setLoading] = useState(false);
    const [fetch, setFetch] = useState(true);
    const [comments, setComments] = useState<IncomingOrderCommentDto[]>([]);


    useEffect(() => {

        const load = async () => {

            const api = new OrdersApi();


            setLoading(true);
            const response = await api.getComments(orderId);

            if (response.status === 200) {
                setComments(response.data);
            }
            setFetch(false);
            setLoading(false);

        }
        if (fetch) {
            load();
        }
    },[fetch, orderId])


    return { comments, loading, setFetch };
}