import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingOrderProductDto } from "../../../../api/orders.type";

export type OrderProductCardDisplayProps = {
    product: IncomingOrderProductDto;
}
export default function OrderProductCardDisplay({ product }: OrderProductCardDisplayProps) {
    return (
        <div className="grid grid-cols-4 items-center">
            <div className="flex items-center gap-2">
                <div className="avatar placeholder">
                    <div className={`bg-primary text-neutral-content w-7 rounded-full flex items-center justify-center`}>
                        <span className="text-xs">
                            <FontAwesomeIcon size="sm" icon={faBook}/>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-[0.8rem] font-bold">{product.product.book.title}</p>
                    <p className="text-[0.7rem]">{product.product.book.digitalVersion ? "Digital" : "Fisico"}</p>
                </div>
            </div>
            <div>
                <p className="text-[0.8rem]">{product.quantity}</p>
            </div>
            <div>
                <p className="text-[0.8rem]">$ {product.totalDollars}</p>
            </div>
            <div>
                <p className="text-[0.8rem]">Bs {product.totalBolivares}</p>
            </div>
        </div>
    );
}