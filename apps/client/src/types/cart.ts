import { IncomingBookProductDto } from "../http/orders/orders.dto"

export type CartItem = {
    product: IncomingBookProductDto;
    quantity: number;
    totalBolivares: number;
    totalDollars: number;
}