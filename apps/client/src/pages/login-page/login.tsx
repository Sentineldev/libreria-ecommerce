import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import { Controller, useForm } from "react-hook-form";
import { LoginData } from "./types/typesLogin";
import { isEmail } from './validations/validationsLoginForm';
import AccountApi from '../../http/account/account.api';
import StorageUtils from '../../utils/storage';
import { useEffect, useState } from 'react';
import ErrorAlert from '../../hooks/errorAlert';
import Spinner from '../../components/spinner/spinner';
import JwtUtils from '../../utils/jwt';

import Logo from "../../assets/img/logo.png"

export default function LoginIndex () {


    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const { handleSubmit, formState: { errors }, control } = useForm<LoginData>({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    async function OnSubmitHandler({ email, password }: LoginData) {
        setErrorMessage("");
        const api = new AccountApi();
        
        setLoading(true);
        const response = await api.auth(email, password);
        setLoading(false);
        if (response.status === 201) {
            StorageUtils.SaveToken(response.data);

            window.location.href = "/"
        }
        if (response.status !== 201) {
            setErrorMessage("Credenciales invalidas")
        }
    }

    useEffect(() => {

        const token = StorageUtils.GetToken();

        if (JwtUtils.IsTokenExpire(token)) {
            return;
        }



        window.location.href = "/"
    },[])
    return(
        <div className="container-login flex justify-center items-center w-screen h-screen">
            <div className="card xl:card-side bg-base-100 shadow-xl min-[320px]:h-3/4 min-[320px]:w-4/5 sm:h-3/4 lg:h-5/6 lg:w-1/2 xl:h-5/6 w-1/2">
                <div className="bg-gray-800 w-1/2  image-login blur-sm">
                </div>
                <div className="card-body xl:w-1/2 bg-white rounded-r ">
                    <div className='flex items-center justify-center '>
                        <img src={Logo} width={256} alt="" />
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center">
                        <h1 className="text-center sm:text-xl xl:text-3xl pb-3 text-primary font-bold">INICIO DE SESIÓN </h1>
                        <div className="card-actions flex flex-col items-center">
                            { errorMessage.length > 0 && <ErrorAlert error={errorMessage}/> }
                            <form className="w-full" onSubmit={handleSubmit(OnSubmitHandler)}>
                                <div className="flex flex-col gap-2 w-full">

                                    <label className="w-full text-primary relative">
                                        Correo Electronico
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faEnvelope} 
                                                className="absolute bottom-2 left-2 size-7" />
                                            <Controller
                                            control={control}
                                            name='email'
                                            rules={{
                                                required: {
                                                    message: "Ingrese el correo electronico",
                                                    value: true,
                                                },
                                                validate: {
                                                    isEmail: (value) => isEmail(value) || "Correo invalido"
                                                }
                                            }}
                                            render={(({ field }) => (
                                                <input {...field} type="email" className="block input input-bordered w-full 
                                                mt-1 pl-10 min-[320px]:text-xs lg:text-base text-base" 
                                                name="login-user" autoComplete="off"
                                            />
                                            ))}
                                            /> 
                                        </div>
                                        {/* {!errors.email ? (
                                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                                    className="absolute right-2 bottom-4"
                                                />
                                            ) : (
                                                <FontAwesomeIcon icon={faCircleXmark} style={{color: "red"}} 
                                                        className="absolute right-2 bottom-4"
                                                    />
                                            )} */}

                                    </label>
                                    { errors.email && <p className='text-error'>{errors.email.message}</p> }

                                    <label className="w-full text-primary relative my-2">
                                        Contraseña
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faLock} 
                                                className="absolute bottom-2 left-2 size-7"
                                            />   
                                            <Controller
                                            control={control}
                                            name='password'
                                            rules={{
                                                required: {
                                                    message: "Ingrese la contraseña",
                                                    value: true,
                                                },
                                            }}
                                            render={(({ field }) => (
                                                <input {...field} type="password" className="block input input-bordered w-full 
                                                mt-1 pl-10 min-[320px]:text-xs" /> 
                                            ))}
                                            /> 
                                            
                                        </div>
                                        {/* {!errors.password ? (
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                                className="absolute right-2 bottom-4"
                                            />

                                        ) : (
                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: "red"}} 
                                                className="absolute right-2 bottom-4"
                                            /> 
                                        )} */}
                                    </label>
                                    { errors.password && <p className='text-error'>{errors.password.message}</p> }
                            
                                    <button disabled={loading} type="submit" className="btn btn-primary w-1/2 text-white m-auto my-4">
                                        { loading && <Spinner/> }
                                        { !loading && "Iniciar sesión" }
                                    </button>
                                    {/* <a href="#" className="label-text-alt link link-hover">¿Olvidaste tu Contraseña?</a> */}
                                    {/* <a href="#" className="label-text-alt link link-hover">¿No te has registrado?</a> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

