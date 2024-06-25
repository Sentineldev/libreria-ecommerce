import { useEffect, useState } from "react"
import ProductsApi from "../../../api/products.api";

export default function useProducts() {


    const [products, setProducts] = useState([]);

    useEffect(() => {


        const load = async () => {

            const api = new ProductsApi();

            const response = await api.getProducts();
            if (response.status === 200) {
                setProducts(response.data);
            }
        }

        load();
    },[])

    return { products }

}