import { IncomingBookProductDto } from "../../../http/orders/orders.dto"
import ProductCard from "./product-card";
import "../../../assets/css/card-container.css"

export type ProductsDisplayProps = {
    products: IncomingBookProductDto[];
}
export default function ProductsDisplay({ products }: ProductsDisplayProps) {


    return (
        <div className="card-container card-container p-4 items-center justify-center overflow-auto h-full">
            {  products.filter((v) => !v.isPublic).map((product) => <ProductCard key={`unique-product-${product.id}`} product={product}/> ) }
        </div>
    )
}