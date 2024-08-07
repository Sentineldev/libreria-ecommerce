import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { IncomingOrderDto } from "../../http/orders/orders.dto";

export type OrderDisplayProps = {
    order: IncomingOrderDto;
}


export function FormatOrderStatus(status: string): string {

    if (status === "PENDING") {
        return "Pendiente"
    }

    if (status === "COMPLETED") {
        return "Completada"
    }

    if (status === "CANCEL") {
        return "Cancelada"
    }
    return "";
}

export function OrderColorByStatus(status: string): string {
    if (status === "PENDING") {
        return "warning"
    }

    if (status === "COMPLETED") {
        return "success"
    }

    if (status === "CANCEL") {
        return "error"
    }
    return "neutral";
}
export default function OrderDisplay({ order }: OrderDisplayProps) {


    return (
        <div className="w-full grid grid-cols-4 gap-4 border-b border-neutral-300 py-2 items-center">
            <div className="flex items-center gap-2">
                <NavLink to={`${order.id}`} className="avatar placeholder">
                    <div className={`btn btn-${OrderColorByStatus(order.status)} text-neutral-content w-12 rounded-full flex items-center justify-center`}>
                        <span className="text-xs">
                            <FontAwesomeIcon size="xl" icon={faCartShopping}/>
                        </span>
                    </div>
                </NavLink>
                <div>
                    <h1 className="font-bold">{order.account.customer.firstName + " " +order.account.customer.lastName}</h1>
                    <p className="text-sm">{FormatOrderStatus(order.status)}</p>
                </div>
            </div>
            <div>
                <h1>{order.date}</h1>
            </div>
            <div>
                <h1 className="font-bold">Bs {order.totalBolivares}</h1>
            </div>
            <div>
                <h1 className="font-bold">$ {order.totalDollars}</h1>
            </div>
        </div>
    );
}