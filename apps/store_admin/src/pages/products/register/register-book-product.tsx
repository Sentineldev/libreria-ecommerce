import { useState } from "react";
import RegisterBookFormStep1 from "./register-book-step-1";
import RegisterProductStep2 from "./register-product-step-2";
import { BookFormFields, BookProductFormFields } from "../types/form.type";
import BaseLayout from "../../../layout/base";
import ProductsApi from "../../../api/products.api";


export default function RegisterBookProduct() {

    const steps: { label: string }[] = [{ label: "Datos del libro" }, { label: "Datos del producto" }];
    const [step, setStep] = useState(1);

    const [ bookData, setBookData ] = useState<BookFormFields>();

    function Step1SubmitHandler(data: BookFormFields) {
        setBookData(data);
        setStep(2);
    }
    async function Step2SubmitHandler(data: BookProductFormFields) {

        if (bookData) {

            const api = new ProductsApi();

            const response = await api.register({
                ...bookData,
                author: bookData.author.split(","),
                genre: bookData.genre.split(","),
                language: bookData.language.split(","),
                ...data,
                dollarsPrice: parseFloat(data.dollarsPrice),
                bolivaresPrice: parseFloat(data.bolivaresPrice),
                stock: parseInt(data.stock),
                pageCount: parseInt(bookData.pageCount)
            })

            if (response.status === 201) {
                alert('Libro creado correctamente!');
            }
        }
    }

    return (
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
                    { step === 1 && <RegisterBookFormStep1 onSubmit={Step1SubmitHandler}/> }
                    { step === 2 && <RegisterProductStep2 GoBack={() => { setStep(1) }} onSubmit={Step2SubmitHandler}/> }
                </div>
            </div>
        </BaseLayout>
    );
}



