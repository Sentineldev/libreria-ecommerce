import { NavBar } from "../components/Navbar";

export type BaseLayoutProps = {
    children: React.ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {


    return (
        <div className="w-full h-screen flex flex-col">
            <div className="border-b border-neutral-400">
                <NavBar/>
            </div>
            <div className="flex-1">
                { children }
            </div>
        </div>
    );
}