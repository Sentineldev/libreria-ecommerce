import ErrorAlert from "../../hooks/errorAlert";

import {onValidateLogin} from "./validationsLoginForm";
import { useState} from "react";
import { INITIALY_ERROR_LOGIN } from "../../consts/const";

function login (){
    const [errorLogin, setErrorLogin] = useState(INITIALY_ERROR_LOGIN)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const valorFormulario = new FormData(e.currentTarget);
        const userName = valorFormulario.get('login-usser') as string;
        const userPassword = valorFormulario.get('login-password') as string;
        const loginData = {
            userName,
            userPassword
        }

        const error = onValidateLogin(loginData);
        setErrorLogin(error)

    }


    return(
        <div className="container-login flex justify-center items-center w-screen h-screen">
            <div className="card lg:card-side bg-base-100 shadow-xl h-4/6 w-1/2">
                <div className="bg-gray-800 w-1/2 h-full image-login blur-sm">
                   
                </div>
                <div className="card-body w-1/2">
                    <h1 className="text-center text-3xl text-white pb-3">INICIO DE SESIÓN </h1>
                        <div className="card-actions flex flex-col items-center">
                            <form className="flex flex-col gap-2 w-full items-center" onSubmit={handleSubmit}>
                                <label className="w-full text-white">
                                    Correo Electronico
                                    <input type="email" className="block input input-bordered w-full mt-1" name="login-usser" autoComplete="off"/>
                                </label>
                            
                                {errorLogin.usser && <ErrorAlert error={errorLogin.usser} />}

                                <label className="w-full text-white">
                                    Contraseña
                                    <input type="password" className="block input input-bordered w-full mt-1" name="login-password"/>
                                </label>
                                {errorLogin.password && <ErrorAlert error={errorLogin.password} />}
                                <button type="submit" className="btn btn-primary w-1/2 text-white">Iniciar sesión</button>
                                <a href="#" className="label-text-alt link link-hover">¿Olvidaste tu Contraseña?</a>
                                <a href="#" className="label-text-alt link link-hover">¿No te has registrado?</a>
                            </form>
                        </div>
                </div>
            </div>
        </div>
        
    )

}

export default login; 