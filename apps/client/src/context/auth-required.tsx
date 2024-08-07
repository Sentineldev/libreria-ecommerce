import { useEffect, useState } from "react";
import AuthContext from "./auth.context";
import { AuthContextData } from "./types/auth.type";
import StorageUtils from "../utils/storage";
import JwtUtils from "../utils/jwt";


export type AuthRequiredProps = {
    children: React.ReactNode;
}
export default function AuthRequired({ children }: AuthRequiredProps) {


    const [data, setData] = useState<AuthContextData>({
        email: "",
        id: "",
        customer: {
            address: "",
            birthDate: "",
            city: "",
            country: "",
            firstName: "",
            gender: "",
            id: "",
            lastName: "",
            postalCode: "",
            state: ""
        },
        exp: 0,
        iat: 0,
        isLogIn: false,
    });

    useEffect(() => {

        const token = StorageUtils.GetToken();

        if (token.length === 0) {
            return;
        }

        if (JwtUtils.IsTokenExpire(token)) {
            return;
        }

        const data = JwtUtils.GetTokenData(token);

        if (!data) {
            return;
        }
        setData({
            ...data,
            isLogIn: true,
        });


    },[])

    return (
        <AuthContext.Provider value={data}>
            { children }
        </AuthContext.Provider>
    );
}