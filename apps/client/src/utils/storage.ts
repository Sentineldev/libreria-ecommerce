import { IncomingBookProductDto } from "../http/orders/orders.dto";
import { CartItem } from "../types/cart";
import DecimalsUtils from "./decimals";

export default class StorageUtils {


    private static tokenKey = "auth-token";
    private static cartKey = "book-cart";
    public static SaveToken(token: string) {
        localStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    public static GetToken(): string {

        const data = localStorage.getItem(this.tokenKey);

        if (data) {
            return JSON.parse(data);
        }

        return "";
    }

    public static ClearToken() {

        localStorage.removeItem(this.tokenKey);
    }
    public static ClearCart() {
        localStorage.removeItem(this.cartKey);
    }

    public static AddToCart(product: IncomingBookProductDto) {
        const cart = localStorage.getItem(this.cartKey);

        if (!cart) {

            const cartItem: CartItem = {
                product: product,
                quantity: 1,
                totalBolivares: product.bolivaresPrice,
                totalDollars: product.dollarsPrice,
            }
            localStorage.setItem(this.cartKey, JSON.stringify([cartItem]));
            return;
        }

        const products: CartItem[] = JSON.parse(cart);

        const productIndex = products.findIndex((val) => val.product.id === product.id);

        if (productIndex === -1) {
            const cartItem: CartItem = {
                product: product,
                quantity: 1,
                totalBolivares: product.bolivaresPrice,
                totalDollars: product.dollarsPrice,
            }
            products.push(cartItem);
            localStorage.setItem(this.cartKey, JSON.stringify(products));
            return;
        }

        products[productIndex].quantity = products[productIndex].quantity + 1;
        products[productIndex].totalBolivares = DecimalsUtils.RoundTo2Decimals(products[productIndex].product.bolivaresPrice  * products[productIndex].quantity);
        products[productIndex].totalDollars = DecimalsUtils.RoundTo2Decimals(products[productIndex].product.dollarsPrice  * products[productIndex].quantity);

        localStorage.setItem(this.cartKey,JSON.stringify(products));
    }


    public static remove(product: IncomingBookProductDto) {

        const items = this.GetCartItems();


        const itemIndex = items.findIndex((val) => val.product.id === product.id);

        if (itemIndex  >= 0) {
            items[itemIndex].quantity = items[itemIndex].quantity - 1;
            items[itemIndex].totalBolivares = DecimalsUtils.RoundTo2Decimals(items[itemIndex].product.bolivaresPrice  * items[itemIndex].quantity);
            items[itemIndex].totalDollars = DecimalsUtils.RoundTo2Decimals(items[itemIndex].product.dollarsPrice  * items[itemIndex].quantity);

            if (items[itemIndex].quantity <= 0) {
                const newItems = items.filter((val) => val.product.id !== product.id);
                localStorage.setItem(this.cartKey, JSON.stringify(newItems));
                return;
            }
            localStorage.setItem(this.cartKey, JSON.stringify(items));
        }

    }

    public static GetCartItems(): CartItem[] {

        const items = localStorage.getItem(this.cartKey);

        if (!items) {

            return [];
        }

        return JSON.parse(items);
    }
}