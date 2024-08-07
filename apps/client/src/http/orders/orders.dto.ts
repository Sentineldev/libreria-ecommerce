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
    id: string;
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
export type IncomingBookProductDto = {
    id: string;
    book: IncomingBookDto;
    bolivaresPrice: number;
    dollarsPrice: number;
    hasStock: boolean;
    isPublic: boolean;
    stock: number;
}

export type IncomingBookDto = {
    id: string;
    title: string;
    synopsis: string;
    imageUrl: string;
    physicalVersion: boolean;
    digitalVersion: boolean;
    releaseDate: string;
    pageCount: number;
    // language: string[];
    // author: string[];
    // genre: string[];
    language: string;
    genre: string;
    author: string;
}