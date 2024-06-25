import useProducts from "../hooks/useProducts";
import ProductDisplay from "./product-display";

export default function ProductsDisplay() {
    const { products } = useProducts();

    return (
        <div className="bg-white shadow-2xl p-12 py-6 flex flex-col gap-6 border rounded-md">
            <div>
                <h1 className="font-bold text-2xl">Productos</h1>
            </div>
            <div className="flex flex-col">
                <div>
                    <div className="grid grid-cols-7 gap-4 bg-slate-100 p-4 items-center">
                        <div className="col-span-3">
                            <h1 className="text-lg opacity-70">Libro</h1>
                        </div>
                        <div>
                            <h1 className="text-lg opacity-70">Stock</h1>
                        </div>
                        <div>
                            <h1 className="text-lg opacity-70">Precio Dolares</h1>
                        </div>
                        <div>
                            <h1 className="text-lg opacity-70">Precio Bolivares</h1>
                        </div>
                        <div>
                            <h1 className="text-lg opacity-70">Estado</h1>
                        </div>
                        {/* <div></div> */}
                        
                    </div>
                </div>
                <div className="flex flex-col">
                    { products.map((product, index) => (
                        <ProductDisplay productData={product} key={`unique-book-display-idnex=${index}`}/>
                    )) }
                </div>
            </div>
        </div>
    );
}