import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingOrderProductDto } from "../../../../api/orders.type";
import OrderProductCardDisplay from "./product-display";

export type OrderProductCardProps = {
    products: IncomingOrderProductDto[];
}
export default function OrderProductCard({ products }: OrderProductCardProps) {

    return (
        <div className="border border-neutral-300 rounded-b rounded h-full min-h-[600px]">
            <div className="border-b border-neutral-300 p-2 px-4">
                <header className="text-primary text-[1.1rem] flex items-center gap-1">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <span>Productos</span>
                </header>
            </div>
            <div className="p-2 px-4 flex flex-col gap-2">
                <div className="grid grid-cols-4">
                    <div>
                        <h1 className="text-[0.85rem] text-primary">Producto</h1>
                    </div>
                    <div>
                        <h1 className="text-[0.85rem] text-primary">Cantidad</h1>
                    </div>
                    <div>
                        <h1 className="text-[0.85rem] text-primary">Total Dolares</h1>
                    </div>
                    <div>
                        <h1 className="text-[0.85rem] text-primary">Total Bolivares</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    { products.map((product) => (
                        <OrderProductCardDisplay key={`o-=s-${product.id}`} product={product}/>
                    )) }
                </div>
            </div>
        </div>
    );
}