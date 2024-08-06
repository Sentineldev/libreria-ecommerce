import { Controller, useForm } from "react-hook-form";
import { BookProductFormFields } from "../types/form.type";
import FormInput from "../../../components/form-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import ValidationsUtils from "../../../utils/validation";


export type RegisterProductStep2Props = {
    GoBack: () => void;
    onSubmit: (data: BookProductFormFields) => void;
    defaultValue?: BookProductFormFields;
}
export default function RegisterProductStep2({ GoBack,  onSubmit, defaultValue }: RegisterProductStep2Props) {

    const { handleSubmit, control, formState: { errors } } = useForm<BookProductFormFields>({
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
            <div className="flex flex-col gap-1">
                <Controller
                control={control}
                name="dollarsPrice"
                rules={{
                    required: {
                        value: true,
                        message: "Ingrese el precio en dolares"
                    },
                    validate: {
                        isNumber: v => ValidationsUtils.IsStringNumber(v) || "Ingrese un numero",
                    }
                }}
                render={(({ field }) => <FormInput label="Precio en dolares" props={{...field, type: "text" }}/>)}
                />
                { errors.dollarsPrice && <p className="text-error">{errors.dollarsPrice.message}</p> }
            </div>
            <div className="flex flex-col gap-1">
                <Controller
                control={control}
                name="bolivaresPrice"
                rules={{
                    required: {
                        value: true,
                        message: "Ingrese el precio en bolivares"
                    },
                    validate: {
                        isNumber: v => ValidationsUtils.IsStringNumber(v) || "Ingrese un numero",
                    }
                }}
                render={(({ field }) => <FormInput label="Precio en bolivares" props={{...field, type: "text" }}/>)}
                />
                { errors.bolivaresPrice && <p className="text-error">{errors.bolivaresPrice.message}</p> }
            </div>
            <div className="flex flex-col gap-1">
                <Controller
                control={control}
                name="stock"
                rules={{
                    required: {
                        value: true,
                        message: "Ingrese el stock"
                    },
                    validate: {
                        isNumber: v => ValidationsUtils.IsStringNumber(v) || "Ingrese un numero",
                    }
                }}
                render={(({ field }) => <FormInput label="Stock" props={{...field, type: "text" }}/>)}
                />
                { errors.stock && <p className="text-error">{errors.stock.message}</p> }
            </div>
            <div className="flex justify-end py-2">
                <button className="btn btn-primary">
                    Registrar
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
            </div>
        </form>
    );
}