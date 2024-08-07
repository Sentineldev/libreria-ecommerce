import { IncomingOrderDto } from "../../http/orders/orders.dto";
import OrderDisplay from "./order-display";

export type OrdersDisplayProps = {
    orders: IncomingOrderDto[]
}
export default function OrdersDisplay({ orders }: OrdersDisplayProps) {

    return (
        <div className="flex flex-col gap-4 w-full bg-white border rounded p-12">
            <div className="grid grid-cols-4 gap-4 bg-primary border  p-4 ">
                <div>
                    <h1 className="text-primary-content text-lg">Orden</h1>
                </div>
                <div>
                    <h1 className="text-primary-content text-lg">Fecha</h1>
                </div>
                <div>
                    <h1 className="text-primary-content text-lg">Total Bolivares</h1>
                </div>
                <div>
                    <h1 className="text-primary-content text-lg">Total Dolares</h1>
                </div>
            </div>
            <div className="flex flex-col gap-8 p-4">
                { orders.map((order) => <OrderDisplay key={`unique-${order.id}`} order={order}/>) }
            </div>
        </div>
    );
} 