import { useParams } from "react-router-dom";
import BaseLayout from "../../../layout/base";
import useOrder from "../hooks/useOrder";
import useOrderProducts from "../hooks/useOrderProducts";
import SpinnerCentered from "../../../components/spinner-centered";
import OrderDetailCard from "./order-detail-card";
import OrderComments from "./comments/order-comments";
import useOrderComments from "../hooks/useOrderComments";
import OrderProductCard from "./products/order-product-card";
import UpdateOrderStatusSection from "./status-buttons";
export default function OrderIndex() {

    const { id } = useParams();


    const order = useOrder({ id: id! })
    const products = useOrderProducts({ orderId: id! })
    const comments = useOrderComments({ orderId: id! })


    if (order.loading && products.loading && comments.loading) {
        return <SpinnerCentered/>
    }

    function onUpdateOrderStatus() {
        order.setFetch(true);
    }

    return (
        <BaseLayout>
            <div className="flex flex-col p-4 ">
                { order && order.order && <UpdateOrderStatusSection onUpdate={onUpdateOrderStatus} order={order.order}/> }
                <div className="grid lg:grid-cols-4 gap-4">
                    { order.order && (
                        <div className="col-span-2 flex flex-col gap-4">
                            <OrderDetailCard order={order.order}/>
                            <OrderProductCard products={products.products}/>
                        </div>
                    ) }
                    <div className="col-span-2">
                        { order.order && <OrderComments order={order.order} onSend={() => comments.setFetch(true)} comments={comments.comments}/> }
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}