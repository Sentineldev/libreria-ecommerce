import {createContext, useState} from 'react'
import {PropsProduct } from '../components/Product'

type CartContextType = {
    cart: PropsProduct[],
    addToCart: (product:PropsProduct) => void,
    clearCart: () => void, 
    removeToCart: (product:PropsProduct) => void; 
}

const defaultContextValue: CartContextType = {
    cart: [],
    addToCart: () => {},
    clearCart: () => {},
    removeToCart: () => {}
}

type children = {
    children: JSX.Element
}

export const CartContext = createContext<CartContextType>(defaultContextValue);

export function CartProvider({children}:children){
    const [cart, setCart] = useState<PropsProduct[]>([])

    const addToCart = (product: PropsProduct) => {
        setCart(prevCart => {
            const productExists = prevCart.some(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }


    const removeToCart = (product: PropsProduct) =>{
        setCart(prevCart => prevCart.filter(item => item.id !== product.id ))
    }

    const clearCart = () => {
        setCart([])
    }
console.log(cart)
    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeToCart
        }}
        >
        {children}           
        </CartContext.Provider>
    )
}