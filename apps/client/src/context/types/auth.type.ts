import { IncomingAccountDto } from "../../http/account/account.dto";

export type AuthContextData = IncomingAccountDto & {
    iat: number;
    exp: number;
    isLogIn: boolean;
};