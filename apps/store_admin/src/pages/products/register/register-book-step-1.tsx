import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, Controller } from "react-hook-form";
import FormInput from "../../../components/form-input";
import { BookFormFields } from "../types/form.type";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";


//TO-DO: Agregar validacion.
export type RegisterBookFormProps = {
    onSubmit: (data: BookFormFields) => void;
    defaultValue?: BookFormFields;
}
export default function RegisterBookFormStep1({ onSubmit, defaultValue }: RegisterBookFormProps) {
    const { handleSubmit,control, register }  = useForm<BookFormFields>({
        defaultValues: defaultValue ? defaultValue: {
            title: "Titulo #1",
            author: "Autor #1",
            genre: "Genero #1",
            physicalVersion: false,
            digitalVersion: false,
            imageUrl: "https://google.com",
            language: "Lenguaje #1",
            pageCount: "50",
            releaseDate: "2004-03-10",
            synopsis: "Sinopsis"
        }
    })

    function SubmitHandler(data: BookFormFields) {
        onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit(SubmitHandler)} className="bg-white border p-4 flex flex-col gap-2 rounded-lg shadow-xl w-full">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Tiene version digital?</span>
                    <input {...register('digitalVersion')} type="checkbox" className="toggle"/>
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Tiene version fisica?</span>
                    <input {...register('physicalVersion')} type="checkbox" className="toggle" />
                </label>
            </div>
            <div>
                <label className="form-control w-full cursor-pointer">
                    <div className="label">
                        <span className="label-text">Fecha de publicacion</span>
                    </div>
                    <div className="flex items-center ">
                        <div className="bg-primary px-3 py-2 rounded-tl-lg rounded-bl-lg">
                            <FontAwesomeIcon icon={faCalendar}/>
                        </div>
                        <div className="px-3 py-2 border flex-1">
                            <Controller
                            control={control}
                            name="releaseDate"
                            rules={{
                                required: true,
                            }}
                            render={(({ field }) => (
                                <Flatpickr
                                className="w-full outline-none"
                                placeholder="dd/mm/yyyy"
                                {...field}
                                />
                            ))}
                            />
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <Controller
                control={control}
                name="title"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput  label="Titulo" props={{  type: "text", ...field }}/>)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Controller
                control={control}
                name="genre"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput label="Genero (separar en ',' si tiene mas de 1)" props={{ type: "text", ...field }}/>)}
                />
                <Controller
                control={control}
                name="author"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput label="Autor (separar en '', si tiene mas de 1)" props={{ type: "text", ...field }}/>)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Controller
                control={control}
                name="language"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput label="Lenguaje" props={{ type: "text", ...field }}/>)}
                />
                <Controller
                control={control}
                name="pageCount"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput label="Numero de paginas" props={{ type: "number", ...field }}/>)}
                />
                
            </div>
            <div className="grid grid-cols-1 gap-4">
                <Controller
                control={control}
                name="imageUrl"
                rules={{
                    required: {
                        message: "Debe colocar el titulo",
                        value: true,
                    },
                }}
                render={(({ field }) => <FormInput label="Url de Imagen" props={{...field, type: "url"}} />)}
                />
            </div>
            <div>
                <Controller
                control={control}
                name="synopsis"
                rules={{
                    required: {
                        message: "Debe colocar la sinopsis",
                        value: true,
                    }
                }}
                render={(({ field }) => (
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Sinopsis</span>
                        </div>
                        <textarea {...field} className="textarea textarea-bordered h-24 resize-none" placeholder="Bio"></textarea>
                    </label>
                ))}
                />
            </div>
            <div className="flex justify-end py-2">
                <button className="btn btn-primary">
                Continuar
                <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
        </form>
    );
}