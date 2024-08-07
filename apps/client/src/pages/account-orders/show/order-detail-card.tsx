import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormatOrderStatus } from "../order-display";
import { IncomingOrderDto } from "../../../http/orders/orders.dto";

export type OrderDetailCardProps = {
    order: IncomingOrderDto;
}
export default function OrderDetailCard({ order }: OrderDetailCardProps) {

    return (
        <div className="border border-neutral-300 rounded-b rounded">
            <div className="border-b border-neutral-300 p-2 px-4">
                <header className="text-primary text-[1.1rem] flex items-center gap-1">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <span>Detalles de Orden</span>
                </header>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                <div className="col-span-2">
                    <p className="opacity-70 text-primary">Cliente</p>
                    <p>{order.account.customer.firstName + " " + order.account.customer.lastName }</p>
                </div>
                <div className="">
                    <p className="opacity-70 text-primary">Status</p>
                    <p>{FormatOrderStatus(order.status)}</p>
                </div>
                <div className="">
                    <p className="opacity-70 text-primary">Fecha</p>
                    <p>{order.date}</p>
                </div>
                <div className="">
                    <p className="opacity-70 text-primary">Total Dolares</p>
                    <p>$ {order.totalDollars}</p>
                </div>
                <div className="">
                    <p className="opacity-70 text-primary">Total Bolivares</p>
                    <p>Bs {order.totalBolivares}</p>
                </div>
            </div>
        </div>
    );
}