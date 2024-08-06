import { useState } from "react";
import OrderApi from "../../../api/orders.api";
import { IncomingOrderDto } from "../../../api/orders.type"
import CustomModal from "../../../components/modal/modal";
import { FormatOrderStatus, OrderColorByStatus } from "../order-display";
import ErrorAlert from "../../../components/alert/error-alert";
import SuccessAlert from "../../../components/alert/succcess-alert";

export type UpdateOrderStatusProps = {
    order: IncomingOrderDto;
    status: string;
    onUpdate: () => void;
}
export default function UpdateOrderStatus({ order, status, onUpdate }: UpdateOrderStatusProps) {

    const modalId = `order-id-${order.id}`;

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function onUpdateHandler() {

        const api = new OrderApi();

        const response = await api.update(order.id, status);

        if (response.status === 200) {

            setSuccessMessage("Actualizacion completa");
            onUpdate();
        }
        else {
            setErrorMessage("Ocurrio un error al realizar la actualizacion.")
        }
 
    }

    return (
        <CustomModal dialogId={modalId}>
            <div className="p-4 flex flex-col gap-4">
                { errorMessage.length > 0 && <ErrorAlert message={errorMessage}/> }
                { successMessage.length > 0 && <SuccessAlert message={successMessage}/> }
                <h1>Actualizar estado de orden</h1>
                <div>
                    <p>Nuevo estado: <strong>{FormatOrderStatus(status)}</strong></p>
                </div>
                <button onClick={onUpdateHandler} className={`btn btn-${OrderColorByStatus(status)} w-full`}>Actualizar</button>
            </div>
        </CustomModal>
    );

}