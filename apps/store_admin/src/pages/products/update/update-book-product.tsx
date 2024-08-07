import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductsApi from "../../../api/products.api";
import BaseLayout from "../../../layout/base";
import RegisterBookFormStep1 from "../register/register-book-step-1";
import RegisterProductStep2 from "../register/register-product-step-2";
import { BookFormFields, BookProductFormFields } from "../types/form.type";
import { IncomingBookProductDto } from "../../../api/product.type";

export default function UpdateBookProduct() {

    const { id} = useParams();

    const [searchParams] = useSearchParams();


    const fromProduct = searchParams.get("from_product");


    const [loading, setLoading] = useState(true);

    const steps: { label: string }[] = [{ label: "Datos del libro" }, { label: "Datos del producto" }];
    const [step, setStep] = useState(1);

    const [ bookData, setBookData ] = useState<BookFormFields>();
    const [ bookProductData, setBookProductData ] = useState<BookProductFormFields>();
    const [product, setProduct] = useState<IncomingBookProductDto>();

    function Step1SubmitHandler(data: BookFormFields) {
        setBookData(data);
        setStep(2);
    }
    async function Step2SubmitHandler(data: BookProductFormFields) {

        if (product && bookData && bookProductData) {

            const api = new ProductsApi();

            const response = await api.update(product.id, {
                ...bookData,
                author: bookData.author.split(","),
                genre: bookData.genre.split(","),
                language: bookData.language.split(","),
                ...data,
                dollarsPrice: parseFloat(data.dollarsPrice),
                bolivaresPrice: parseFloat(data.bolivaresPrice),
                stock: parseInt(data.stock),
                pageCount: parseInt(bookData.pageCount),
                isPublic: product.isPublic,
            })

            if (response.status === 200) {
                if (fromProduct) {
                    window.location.replace(`/inventory/products/${fromProduct}`)
                }
                alert('Producto actualizado correctamente!');
            }
        }
    }

    useEffect(() => {
        const load = async () => {

            if (!id) return;

            const api = new ProductsApi();

            const response = await api.getById(id);
            if (response.status === 200) {
                const data: IncomingBookProductDto = response.data;
                setProduct(data);
                setBookData({
                    ...data.book,
                    pageCount: String(data.book.pageCount)
                })
                setBookProductData({
                    bolivaresPrice: String(data.bolivaresPrice),
                    dollarsPrice: String(data.dollarsPrice),
                    stock: String(data.stock),
                })
            }
            setLoading(false);
        }
        load();
    },[id])

    return (
        <>
        { !loading &&
        <BaseLayout>
            <div className=" flex items-center justify-center">
                <div className="w-[50%] flex flex-col justify-center items-center gap-4 py-12">
                    <ul className="steps">
                        { steps.map((val, index) => (
                            <li key={`unique-form-step-${index}`} className={`step ${index < step && "step-primary"}`}>
                                {val.label}
                            </li>
                        )) }
                    </ul>
                    { step === 1 && <RegisterBookFormStep1 defaultValue={bookData} onSubmit={Step1SubmitHandler}/> }
                    { step === 2 && <RegisterProductStep2 defaultValue={bookProductData} GoBack={() => { setStep(1) }} onSubmit={Step2SubmitHandler}/> }
                </div>
            </div>
        </BaseLayout>
        }
        </>
        
    );
}