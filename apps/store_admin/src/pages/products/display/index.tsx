import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IncomingBookProductDto } from "../../../api/product.type";
import ProductsApi from "../../../api/products.api";
import BaseLayout from "../../../layout/base";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProductBookCard from "./book-card";

export default function BookProductIndex() {

    const { id } = useParams();


    const [product, setProduct] = useState<IncomingBookProductDto>();
    useEffect(() => {

        const load = async () => {

            const api = new ProductsApi();

            const response = await api.getById(id!);

            if (response.status === 200) setProduct(response.data);
        }
        load();
    },[id])

    return (
        <>
        {
            product &&

            <BaseLayout>
                <div className="h-full flex justify-center">
                    <div className="w-[1024px] flex flex-col gap-4 py-8">
                        <div className="flex flex-col gap-4 col-span-2">
                            <div className="w-full border-b border-slate-400 py-2">
                                <div className="tooltip" data-tip={"Actualizar"}>
                                    <NavLink to={`/inventory/products/update/${product.id}?from_product=${product.id}`} className="btn btn-outline border-none">
                                        <FontAwesomeIcon size="2xl" icon={faEdit}/>
                                    </NavLink>
                                </div>
                                <div className="tooltip" data-tip={"Eliminar"}>
                                    <NavLink to={`/inventory/products/delete/${product.id}`} className="btn  btn-outline border-none">
                                        <FontAwesomeIcon size="2xl" icon={faTrash}/>
                                    </NavLink>
                                </div> 
                            </div>
                            <ProductBookCard product={product}/>
                        </div>
                    </div> 
                </div>
            </BaseLayout>
        }
        </>
    );
}