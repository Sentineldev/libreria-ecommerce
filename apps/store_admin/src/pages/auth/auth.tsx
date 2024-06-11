import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/auth.css";
import { Controller, useForm } from "react-hook-form";
import { AuthFormData } from "./types/types";

export default function Auth() {

    const { handleSubmit, control, formState: { errors } } = useForm<AuthFormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    });


    async function SubmitHandler(data: AuthFormData) {

        console.log('Form data...', data);
    }   

    return (
        <div className="container-login flex justify-center items-center w-screen h-screen">
            <div className="card xl:card-side bg-base-100 shadow-xl min-[320px]:h-3/4 min-[320px]:w-4/5 sm:h-3/4 lg:h-5/6 lg:w-1/2 xl:h-5/6 w-1/2">
                <div className="bg-gray-800 w-1/2  image-login blur-sm">
    
                </div>
                <div className="card-body xl:w-1/2">
                    <h1 className="text-center sm:text-xl xl:text-3xl text-white pb-3">INICIO DE SESIÓN </h1>
                        <div className="card-actions flex flex-col items-center">
                            <form onSubmit={handleSubmit(SubmitHandler)} className="w-full">
                                <div className="flex flex-col gap-4 w-full items-center">
                                    <Controller
                                    control={control}
                                    name="email"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Debe colocar el correo electronico'
                                        }
                                    }}
                                    render={(({ field }) => (
                                        <label className="w-full text-white relative">
                                            Correo Electronico
                                            <div className="flex items-center">
                                                <FontAwesomeIcon icon={faEnvelope} className="absolute bottom-2 left-2 size-7" />
                                                <input {...field} type="email" className="block input input-bordered w-full 
                                                    mt-1 pl-10 min-[320px]:text-xs lg:text-base text-base" 
                                                    name="login-user" autoComplete="off"
                                                />
                                            </div>
                                        </label>
                                    ))}
                                    />
                                    {errors.email && <p className="text-error w-full">{errors.email.message}</p>}
                                    <Controller
                                    control={control}
                                    name="password"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Debe colocar la contraseña'
                                        }
                                    }}
                                    render={(({ field }) => (
                                        <label  className="w-full text-white relative">
                                            Contraseña
                                            <div className="flex items-center">
                                                <FontAwesomeIcon icon={faLock} className="absolute bottom-2 left-2 size-7"/>   
                                                <input {...field} type="password" className="block input input-bordered w-full 
                                                    mt-1 pl-10 min-[320px]:text-xs" 
                                                    name="login-password"/>  
                                            </div>
                                        </label>
                                    ))}
                                    />
                                    {errors.password && <p className="text-error w-full">{errors.password.message}</p>}
                                    <button type="submit" className="btn btn-primary w-1/2 text-white">Iniciar sesión</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    );
}