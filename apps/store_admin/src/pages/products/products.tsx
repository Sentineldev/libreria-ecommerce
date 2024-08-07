import BaseLayout from "../../layout/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ProductsDisplay from "./list-display/products-display";

export default function ProductsIndex() {

    return (
        <BaseLayout>
            <div className="flex justify-center items-center py-8 ">
                <div className=" flex flex-col gap-4 p-12 lg:p-0">
                    <div>
                        <NavLink to={`register`}  className="btn btn-primary">
                            <FontAwesomeIcon icon={faBook}/>
                            Registrar
                        </NavLink>
                    </div>
                    <ProductsDisplay/>
                </div>
            </div>
        </BaseLayout>
    );
}