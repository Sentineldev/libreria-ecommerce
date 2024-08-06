import { faCheck, faPause, faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingOrderDto } from "../../../api/orders.type";
import { useState } from "react";
import UpdateOrderStatus from "./update-order-status";
import { openModal } from "../../../components/modal/modal-toggler";

export type UpdateOrderStatusSectionProps = {
    order: IncomingOrderDto;
    onUpdate: () => void;
}
export default function UpdateOrderStatusSection({ order, onUpdate }: UpdateOrderStatusSectionProps) {

    const [status, setStatus] = useState('');


    function onClickHandler(status: string) {
        setStatus(status)
        openModal(`order-id-${order.id}`);
    }
    return (    
        <div className="flex  py-1 flex-1">
            <UpdateOrderStatus onUpdate={onUpdate} status={status} order={order}/>
            <div className="flex-1 flex gap-2">
                <div className="tooltip tooltip-success tooltip-bottom" data-tip="Completar">
                    <button onClick={() => onClickHandler("COMPLETED")} className="btn btn-success btn-circle btn-outline ">
                        <FontAwesomeIcon size="2x" icon={faCheck}/>
                    </button>
                </div>
                <div className="tooltip tooltip-warning tooltip-bottom" data-tip="Pendiente">
                    <button onClick={() => onClickHandler("PENDING")} className="btn btn-warning btn-circle btn-outline">
                        <FontAwesomeIcon size="2x" icon={faPause}/>
                    </button>
                </div>
            </div>
            <div className="tooltip tooltip-error tooltip-bottom" data-tip="Cancelar">
                <button onClick={() => onClickHandler("CANCEL")} className="btn btn-error btn-circle btn-outline ">
                    <FontAwesomeIcon size="2x" icon={faCancel}/>
                </button>
            </div>
        </div>
    );
}