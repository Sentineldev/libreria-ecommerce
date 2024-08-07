import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useId, useState } from "react";
import { PropsProduct } from "./Product";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart";



type CartItemProps = {
    Product: PropsProduct;
    addToCart: (product: PropsProduct) => void;
}


function CartItem({ Product, addToCart }: CartItemProps){
    return(
        <li className="flex justify-center flex-col item-center text-center pb-2">
            <img src={Product.book.imageUrl} alt={Product.book.title} />
            <div>{Product.book.title}</div>
            <footer>
                <small>
                    Cantidad: {Product.quantity}
                </small>
              <div>
                <button className="h-8 w-8 rounded-md bg-green-600"
                        onClick={() => addToCart(Product)}>+
                </button>
              </div>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const [openCart, setOpenCart] = useState(false)
    const {cart, addToCart, clearCart} = useCart()
    
    function onDisplayCart(){
        setOpenCart(!openCart)
    }


    
    return (
      <div className="flex justify-end w-full pt-2 pb-2 pr-2">
            <label htmlFor={cartCheckboxId} className="flex items-center justify-center bg-blue-500 rounded-full cursor-pointer 
                h-8 w-8 p-1 transition-all duration-300 ease-in-out z-[9999] hover:scale-110" onClick={onDisplayCart}>
                <FontAwesomeIcon icon={faCartShopping}/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside   className={`fixed top-0 right-0 w-[240px] bg-black p-8 transition-all duration-300 ease-in-out h-full overflow-y-auto
                ${openCart ? 'block' : 'hidden'}`}>
                 <ul>
                 {cart.map(product => (
                    <CartItem
                    key={product.id}
                    Product={product}
                    addToCart={() => addToCart(product)}
                    {...product}
                    />
                    
                ))}
                    <div className="flex justify-center items-center w-full">
                        <button className="flex items-center justify-center bg-red-600 rounded-full cursor-pointer 
                            h-10 w-10 p-1 transition-all duration-300 ease-in-out  hover:scale-110" 
                            onClick={clearCart}>
                                <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                 </ul>
                
            </aside>
      </div>
      
      
    )

}