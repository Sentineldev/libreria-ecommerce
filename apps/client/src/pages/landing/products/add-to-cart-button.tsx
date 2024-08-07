import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingBookProductDto } from "../../../http/orders/orders.dto";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import StorageUtils from "../../../utils/storage";

export type AddToCartButtonProps = {
    product: IncomingBookProductDto;
}
export default function AddToCartButton({ product }: AddToCartButtonProps) {


    function onClickHandler() {
        StorageUtils.AddToCart(product);
        alert("Producto agregado al carrito")
    }

    return (
        <button onClick={onClickHandler} className="btn btn-primary">
            <FontAwesomeIcon icon={faCartPlus}/>
            Agregar al carrito 
        </button>
    );
} 