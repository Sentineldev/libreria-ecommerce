import { IncomingCustomerDto } from "../customer/customer.dto";

export type IncomingAccountDto = {
    id: string;
    email: string;
    customer: IncomingCustomerDto;
};