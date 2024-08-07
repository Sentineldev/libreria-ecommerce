import { createContext } from "react";
import { AuthContextData } from "./types/auth.type";


const AuthContext = createContext<AuthContextData>({
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

export default AuthContext;