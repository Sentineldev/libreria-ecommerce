import useProducts from "./hooks/useProducts";

export default function ProductsIndex() {

    const { products } = useProducts();
    return (
        <h1>Pagina de productos! {products.length}</h1>
    );
}