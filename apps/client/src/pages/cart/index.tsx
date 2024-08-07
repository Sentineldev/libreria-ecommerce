import { useEffect, useState } from "react";
import BaseLayout from "../../layout/base";
import StorageUtils from "../../utils/storage";
import { CartItem } from "../../types/cart";
import ItemDisplay from "./item-display";
import DecimalsUtils from "../../utils/decimals";
import useAuthContext from "../../context/useAuthContext";
import Spinner from "../../components/spinner/spinner";
import OrdersApi from "../../http/orders/orders.api";
import { CreateOrderProductDto } from "../../http/orders/orders.dto";

export default function CartIndex() {


    const [items, setItems] = useState<CartItem[]>([]);
    const [totalBolivares, setTotalBolivares] = useState(0);
    const [totalDollars, setTotalDollars] = useState(0);

    const { email, isLogIn } = useAuthContext();
    const [loading, setLoading] = useState(false);   

    useEffect(() => {
        const load = async () => {
            const cartItems = StorageUtils.GetCartItems();
            setItems(cartItems);
        }
        load();
    },[])


    function onUpdate() {
        const cartItems = StorageUtils.GetCartItems();
        setItems(cartItems);
    }

    async function GenerateOrder() {
        const api = new OrdersApi();

        if (!isLogIn) {
            alert("Debe registrarse para realizar una orden")
            return;
        }

        const products: CreateOrderProductDto[] = items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
            totalBolivares: item.totalBolivares,
            totalDollars: item.totalDollars,
        }))
        setLoading(true);
        const response = await api.createOrder({
            accountEmail: email,
            totalBolivares: totalBolivares,
            totalDollars: totalDollars,
            products: products,
        });
        setLoading(false);
        if (response.status === 201 || response.status === 201) {
            alert("La orden fue generada correctamente")
            StorageUtils.ClearCart();
            setItems([]);
        }
    }


    useEffect(() => {
        const bolivares = items.reduce((a,b) => a + b.totalBolivares,0)
        const dollars = items.reduce((a,b) => a + b.totalDollars,0)
        setTotalBolivares(DecimalsUtils.RoundTo2Decimals(bolivares));
        setTotalDollars(DecimalsUtils.RoundTo2Decimals(dollars));
    },[items])    
    return (
        <BaseLayout>
        <div className="py-4">
            <div className="lg:w-[1024px] m-auto p-8 flex flex-col gap-4 bg-white">

                { isLogIn && (
                    <div>
                        <button onClick={GenerateOrder} disabled={loading} className="btn btn-primary">
                            { loading && <Spinner/> }
                            { !loading && "Generar Orden" }
                        </button>
                    </div>
                ) }
                <p>Total Bolivares: <strong>Bs {totalBolivares}</strong></p>
                <p>Total Dolares: <strong>$ {totalDollars}</strong></p>
                <div className="grid grid-cols-4 bg-primary p-4">
                    <div>
                        <h1 className="text-primary-content">Producto</h1>
                    </div>
                    <div>
                        <h1 className="text-primary-content">Cantidad</h1>
                    </div>
                    <div>
                        <h1 className="text-primary-content">Total Dolares</h1>
                    </div>
                    <div>
                        <h1 className="text-primary-content">Total Bolivares</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-4">
                    { items.map((item) => (
                        <ItemDisplay onUpdate={onUpdate} key={`unique-cart-item-${item.product.id}`} item={item}/>
                    )) }
                </div>
            </div>
        </div>
        </BaseLayout>
    );
}