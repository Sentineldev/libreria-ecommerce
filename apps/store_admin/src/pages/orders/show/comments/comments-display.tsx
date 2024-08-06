import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingOrderCommentDto } from "../../../../api/orders.type";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export type CommentDisplayProps = {
    comment: IncomingOrderCommentDto;
}

export default function CommentDisplay({ comment }: CommentDisplayProps) {

    return (
        <div className={`chat ${comment.fromCustomer ? "chat-start" : "chat-end"}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full bg-neutral-200">
                    <div className="h-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                </div>
            </div>
            <div className="chat-header">
                {/* {comment.fromCustomer ? "Cliente": "Unkown"} */}
                <time className="text-xs opacity-50">{new Date(comment.createdAt).toISOString().split("T")[1].split(".")[0]}</time>
            </div>
            <div className="chat-bubble ">{comment.body}</div>
            {/* <div className="chat-footer opacity-50">{comment.createdAt}</div> */}
        </div>
    );
}