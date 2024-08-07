import { IncomingBookProductDto } from "./product.type";

export type IncomingCustomerDto = {
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    country: string;
    city: string;
    state: string;
    address: string;
    postalCode: string;
}
export type IncomingAccountDto = {
    id: string;
    email: string;
    customer: IncomingCustomerDto;
}
export type IncomingOrderDto = {
    id: string;
    date: string;
    status: string;
    totalDollars: number;
    totalBolivares: number;
    account: IncomingAccountDto;
};

export type IncomingOrderProductDto = {
    quantity: number;
    totalDollars: number;
    totalBolivares: number;
    product: IncomingBookProductDto;
    order: IncomingOrderDto;
}

export type CreateOrderDto = object;


export type IncomingOrderCommentDto = {
    id: string;
    order: IncomingOrderDto;
    body: string;
    createdAt: string;
    fromCustomer: boolean;
}
export type CreateCommentDto = {
    body: string;
}