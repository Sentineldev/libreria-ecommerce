import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrawerButton from "../components/drawer-button";
import { faBox, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export type BaseLayoutProps = {
    children: React.ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-neutral-100">
                <div className="p-2 lg:hidden">
                    <DrawerButton/> {/* Boton para abrir el menu. responsivo */}
                </div>
                {/* Page content here */}

                { children }
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary text-primary-content min-h-full w-80 p-4 gap-4">
                {/* Sidebar content here */}
                    <li>
                        <NavLink to={`/inventory/products`} className="text-xl text-primary-content">
                            <FontAwesomeIcon icon={faBox}/>
                            <span>Productos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/inventory/orders`} className="text-xl text-primary-content">
                            <FontAwesomeIcon icon={faCartShopping}/>
                            <span>Ordenes</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

