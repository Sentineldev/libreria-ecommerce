import SpinnerCentered from "../../components/spinner/spinner-centered";
import useAuthContext from "../../context/useAuthContext";
import BaseLayout from "../../layout/base";
import useAccountOrders from "./hooks/useAccountOrders";
import OrdersDisplay from "./orders-display";

export default function AccountOrders() {


    const { isLogIn, id } = useAuthContext();
    const { orders, loading } = useAccountOrders({ accountId: id, })

    if (!isLogIn) {
        window.location.href = "/"
        return 
    }

    if (loading) {

        return <SpinnerCentered/>
    }
    
    
    return (
        <BaseLayout>
            <div className="lg:w-[1140px] m-auto py-12">
                <OrdersDisplay orders={orders}/>
            </div>
        </BaseLayout>
    );
}