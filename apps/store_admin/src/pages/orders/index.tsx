import BaseLayout from "../../layout/base";
import useOrders from "./hooks/useOrders";
import OrdersDisplay from "./orders-display";

export default function OrdersIndex() {


    const { loading,orders } = useOrders();
    return (
        <BaseLayout>
            <div className="flex items-center justify-center  p-12">
                { !loading && <OrdersDisplay orders={orders}/> }
            </div>
        </BaseLayout>
    );
}