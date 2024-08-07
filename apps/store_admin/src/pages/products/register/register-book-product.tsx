import { useState } from "react";
import RegisterBookFormStep1 from "./register-book-step-1";
import RegisterProductStep2 from "./register-product-step-2";
import { BookFormFields, BookProductFormFields } from "../types/form.type";
import BaseLayout from "../../../layout/base";
import ProductsApi from "../../../api/products.api";
import ToastSuccessAlert from "../../../components/toast-success-alert";
import ToastErrorAlert from "../../../components/toast-error-alert";
import ToastUtils from "../../../utils/toast";
import SpinnerCentered from "../../../components/spinner-centered";


export default function RegisterBookProduct() {

    const steps: { label: string }[] = [{ label: "Datos del libro" }, { label: "Datos del producto" }];
    const [step, setStep] = useState(1);

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [ bookData, setBookData ] = useState<BookFormFields>();

    function Step1SubmitHandler(data: BookFormFields) {
        setBookData(data);
        setStep(2);
    }
    async function Step2SubmitHandler(data: BookProductFormFields) {

        if (bookData) {

            if (!bookData.digitalVersion && !bookData.physicalVersion) {
                ShowAlert("El libro debe ser fisico, digital o ambos", "ERROR");
                return;
            }
            const api = new ProductsApi();

            setLoading(true);
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
            setLoading(false);

            if (response.status === 201) {
                ShowAlert("Libro creado correctamente","SUCCESS");
            }
            else {
                ShowAlert("Ocurrio un error creando el libro","ERROR");
            }
        }
    }

    function ShowAlert(message: string, type: "ERROR" | "SUCCESS") {

        if (type === "ERROR") {
            setErrorMessage(message)
            setTimeout(() => {
                setErrorMessage("");
            }, ToastUtils.TOAST_MAX_SHOW_TIME);
        }
        if (type === "SUCCESS") {
            setSuccessMessage(message)
            setTimeout(() => {
                setSuccessMessage("");
            }, ToastUtils.TOAST_MAX_SHOW_TIME);
        }
    }

    return (
        <BaseLayout>
            { successMessage.length > 0 && <ToastSuccessAlert message={successMessage}/> }
            { errorMessage.length > 0 && <ToastErrorAlert message={errorMessage}/> }
            <div className=" flex items-center justify-center">
                <div className="w-[70%] flex flex-col justify-center items-center gap-4 ">
                    {!loading && (
                        <ul className="steps">
                            { steps.map((val, index) => (
                                <li key={`unique-form-step-${index}`} className={`step ${index < step && "step-primary"}`}>
                                    {val.label}
                                </li>
                            )) }
                        </ul>
                    ) }
                    { loading && <SpinnerCentered/> }
                    { step === 1 && <RegisterBookFormStep1 onSubmit={Step1SubmitHandler}/> }
                    { step === 2 && <RegisterProductStep2 GoBack={() => { setStep(1) }} onSubmit={Step2SubmitHandler}/> }
                </div>
            </div>
        </BaseLayout>
    );
}



