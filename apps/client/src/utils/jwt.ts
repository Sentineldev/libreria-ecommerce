import { jwtDecode } from "jwt-decode";
import { AuthContextData } from "../context/types/auth.type";

export default  class JwtUtils {



    public static IsTokenExpire(token: string): boolean {

        if (token.length > 0) {
            const data = jwtDecode<AuthContextData>(token);

            if (data) {
                const expireTime = data.exp * 1000;
                return expireTime < new Date().getTime();
            }
        } 
        return true;
    }

    public static GetTokenData(token: string): AuthContextData | undefined {

        if (token.length > 0) {
            const data = jwtDecode<AuthContextData>(token);

            if (data) {
                return data;
            }
        }
        return undefined;
    }
}