import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem } from "../../types/cart"
import StorageUtils from "../../utils/storage";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export type ItemDisplayProps = {
    item: CartItem;
    onUpdate: () => void;
}
export default function ItemDisplay({ item, onUpdate }: ItemDisplayProps) {



    function addToCart() {
        StorageUtils.AddToCart(item.product);
        onUpdate();
    }
    function remove() {
        StorageUtils.remove(item.product);
        onUpdate();
    }
    return (
        <div className="grid grid-cols-5 gap-4 items-center">
            <div>
                <h1>{item.product.book.title}</h1>
                <p>{item.product.book.digitalVersion ? "Digital" : "Fisico"}</p>
            </div>
            <div>
                <h1>{item.quantity}</h1>
            </div>
            <div>
                <h1>$ {item.totalDollars}</h1>
            </div>
            <div>
                <h1>Bs {item.totalBolivares}</h1>
            </div>
            <div className="flex gap-2">
                <button onClick={addToCart} className="btn btn-success btn-xs btn-outline">
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button onClick={remove} className="btn btn-error btn-xs btn-outline">
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
            </div>
        </div>
    );
}