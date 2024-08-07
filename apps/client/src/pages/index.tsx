import { Outlet } from "react-router-dom";
import AuthRequired from "../context/auth-required";

export default function AppIndex() {

    return (
        <AuthRequired>
            <Outlet/>
        </AuthRequired>
    );
}