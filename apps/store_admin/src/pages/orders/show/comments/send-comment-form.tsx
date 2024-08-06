import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import OrderApi from "../../../../api/orders.api";
import { IncomingOrderDto } from "../../../../api/orders.type";

export type SendCommentFormProps = {
    onSend: () => void;
    order: IncomingOrderDto;
}

type CommentFormValue= {
    body: string;
}
export default function SendCommentForm({ onSend, order }: SendCommentFormProps) {


    const { handleSubmit,register, reset} = useForm<CommentFormValue>({
        defaultValues: {
            body: ""
        }
    });


    async function OnSubmitHandler(data: CommentFormValue) {

        const api = new OrderApi();

        const response = await api.addComment(order.id, { body: data.body });

        if (response.status === 201) {
            reset();
            onSend();
        }

    }
    return (
        <form onSubmit={handleSubmit(OnSubmitHandler)} className="flex items-center border px-2 py-1 rounded-lg border-neutral-300">
            <input {...register("body")} type="text" className="w-full bg-transparent outline-none" placeholder="Escribir comentario"/>
            <button className="btn btn-xs">
                <FontAwesomeIcon icon={faEnvelope}/>
            </button>
        </form>
    );
}