import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IncomingBookProductDto } from "../../../api/product.type"

export type BookCardProps = {
    product: IncomingBookProductDto;
}
export default function ProductBookCard(props: BookCardProps) {


    const { product } = props;
    return (
        <div className="shadow-xl max-h-[400px] bg-white border w-full flex p-4 gap-6 rounded-lg overflow-y-auto">
            <div className="border w-[250px] h-[280px]  bg-slate-100 rounded-lg">
                <img src={product.book.imageUrl} width={250} height={280} className="rounded-md"/>
            </div>
            <div className="grid grid-cols-3 w-full gap-6 overflow-y-auto h-full">
                <div className="col-span-2 h-full overflow-y-auto flex flex-col gap-2">
                    <div className="border-b py-1">
                        <h1 className="text-lg font-bold">{product.book.title}</h1>
                        <p className="text-[0.9rem]">{product.book.genre}</p>
                    </div>
                    <div className="overflow-y-auto">
                        <p className="text-[0.9rem]">{product.book.synopsis}</p>
                    </div>
                </div>
                <div className="border-l flex flex-col gap-2">
                    <div className="border-b  px-2 pb-2 flex flex-col gap-2">
                        <p>Autor(es): {product.book.author}</p>
                        <p>Idioma: {product.book.language}</p>
                        <p>Publicacion: {product.book.releaseDate}</p>
                        <p>Paginas: {product.book.pageCount}</p>
                        <p>
                            Version Digital: { product.book.digitalVersion ? <FontAwesomeIcon color="green" icon={faCheck}/> : <FontAwesomeIcon color="red" icon={faX}/> }
                        </p>
                        <p>
                            Version Fisica: { product.book.physicalVersion ? <FontAwesomeIcon color="green" icon={faCheck}/> : <FontAwesomeIcon color="red" icon={faX}/> }
                        </p>
                    </div>
                    <div className="px-2 flex flex-col gap-2">
                        <p>Precio en Dolares: {product.bolivaresPrice}</p>
                        <p>Precio en Bolivares: {product.dollarsPrice}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}