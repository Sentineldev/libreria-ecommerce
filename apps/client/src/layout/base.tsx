import { NavBar } from "../components/Navbar";
import AuthRequired from "../context/auth-required";

export type BaseLayoutProps = {
    children: React.ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {


    return (
        <AuthRequired>
            <div className="w-full h-screen flex flex-col">
                <div>
                    <NavBar/>
                </div>
                <div className="bg-red-300 flex-1">
                    { children }
                </div>
            </div>
        </AuthRequired>
    );
}