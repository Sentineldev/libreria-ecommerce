import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingOrderCommentDto, IncomingOrderDto } from "../../../../api/orders.type";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import CommentDisplay from "./comments-display";
import SendCommentForm from "./send-comment-form";

export type OrderCommentsProps = {
    comments: IncomingOrderCommentDto[];
    order: IncomingOrderDto;
    onSend: () => void;
}
export default function OrderComments({ comments, order, onSend }: OrderCommentsProps) {


    return (
        <div className="flex flex-col gap-2 w-full h-full min-h-[600px] border">
            <div className="border-b border-neutral-300 p-2 px-4">
                <header className="text-primary text-[1.1rem] flex items-center gap-1">
                    <FontAwesomeIcon icon={faComments}/>
                    <span>Chat</span>
                </header>
            </div>
            <div className="flex flex-col gap-2 p-2 px-4 h-full overflow-auto">
                <div className="flex-1 overflow-auto  px-4">
                    { comments.map((comment) => <CommentDisplay key={`unique-${comment.id}`} comment={comment}/>) }
                </div>
                <div className="w-full">
                    <SendCommentForm order={order} onSend={onSend}/>
                </div>
            </div>
        </div>
    );
}
