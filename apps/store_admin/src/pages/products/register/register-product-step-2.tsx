import { Controller, useForm } from "react-hook-form";
import { BookProductFormFields } from "../types/form.type";
import FormInput from "../../../components/form-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";


export type RegisterProductStep2Props = {
    GoBack: () => void;
    onSubmit: (data: BookProductFormFields) => void;
    defaultValue?: BookProductFormFields;
}
export default function RegisterProductStep2({ GoBack,  onSubmit, defaultValue }: RegisterProductStep2Props) {

    const { handleSubmit, control } = useForm<BookProductFormFields>({
        defaultValues: defaultValue ? defaultValue : {
            bolivaresPrice: "750.39",
            dollarsPrice: "30.42",
            stock: "12"
        }
    });

    function OnSubmitHandler(data: BookProductFormFields) {
        onSubmit(data);
    }
    return (
        <form onSubmit={handleSubmit(OnSubmitHandler)} className="bg-white border p-4 flex flex-col gap-2 rounded-lg shadow-xl w-full">
            <div className="flex">
                <button onClick={() => { GoBack() }} className="btn bg-slate-200">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                    Regresar
                </button>
            </div>
            <Controller
            control={control}
            name="dollarsPrice"
            rules={{
                required: true,
                validate: {
                    isNumber: v => !isNaN(Number(v)),
                },
            }}
            render={(({ field }) => <FormInput label="Precio en dolares" props={{...field, type: "number" }}/>)}
            />
            <Controller
            control={control}
            name="bolivaresPrice"
            rules={{
                required: true,
                validate: {
                    isNumber: v => !isNaN(Number(v)),
                },
            }}
            render={(({ field }) => <FormInput label="Precio en bolivares" props={{...field, type: "number" }}/>)}
            />
            <Controller
            control={control}
            name="stock"
            rules={{
                required: true,
                validate: {
                    isNumber: v => !isNaN(Number(v)),
                },
            }}
            render={(({ field }) => <FormInput label="Stock" props={{...field, type: "number" }}/>)}
            />
            <div className="flex justify-end py-2">
                <button className="btn btn-primary">
                    Registrar
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
            </div>
        </form>
    );
}