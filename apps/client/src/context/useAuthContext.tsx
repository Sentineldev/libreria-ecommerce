import { useContext } from "react";
import AuthContext from "./auth.context";

export default function useAuthContext() {

    return useContext(AuthContext);
}