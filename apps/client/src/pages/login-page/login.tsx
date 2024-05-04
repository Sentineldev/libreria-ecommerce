import ErrorAlert from "../../hooks/errorAlert";
import {isEmptyPassword, onValidateLogin} from "./validationsLoginForm";
import { useState} from "react";
import { INITIALY_ERROR_LOGIN} from "../../consts/const";
import { isEmail } from "./validationsLoginForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faCircleCheck, faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'

function login (){
    const [errorLogin, setErrorLogin] = useState(INITIALY_ERROR_LOGIN)
    const [iconValidation, setIconValidation] = useState({
        usser: "",
        password: ""
    })
    const [colorIcons, setColorIcons] = useState({
        usser: '#7f96bd',
        password: '#7f96bd'
    })

    
    function handleBlur(e: React.FocusEvent<HTMLInputElement>){
        const input = e.currentTarget;
        switch(input.name){
            case 'login-usser':
                if (isEmail(input.value)) {
                    input.classList.remove('input-error', 'bg-error');
                    setIconValidation(prevState => ({
                        ...prevState,
                        usser: 'validated'
                    }));
                    setColorIcons( prevState => ({
                        ...prevState, 
                        usser: '#1a890b'
                    }))
                } else {
                    input.classList.add('input-error', 'bg-error');
                    setIconValidation(prevState => ({
                        ...prevState,
                        usser: 'error'
                    }));
                    setColorIcons( prevState => ({
                        ...prevState, 
                        usser: '#000000'
                    }))
                }
                break;
    
            case 'login-password':
                if (!isEmptyPassword(input.value)) {
                    input.classList.remove('input-error', 'bg-error');
                    setIconValidation(prevState => ({
                        ...prevState,
                        password: 'validated'
                    }));
                    setColorIcons(prevState => ({
                        ...prevState,
                        password: '1a890b'
                    }))
                } else {
                    input.classList.add('input-error', 'bg-error');
                    setIconValidation(prevState => ({
                        ...prevState,
                        password: 'error'
                    }));
                    setColorIcons(prevState => ({
                        ...prevState,
                        password: '#000000'
                    }))
                }
                break;
    
            default:
                break;
        }
    }
    

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
                                <label className="w-full text-white relative">
                                    Correo Electronico
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} style={{color: colorIcons.usser,}} 
                                            className="absolute bottom-2 left-2 size-7" />
                                        <input type="email" className="block input input-bordered w-full mt-1 pl-10" 
                                            name="login-usser" autoComplete="off" onBlur={handleBlur}
                                        />
                                    </div>
                                   {iconValidation.usser === 'validated' ? (
                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                        className="absolute bottom-4 left-80" 
                                        />
                                    ) : (
                                        iconValidation.password === 'error' && (
                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: "#000000"}} 
                                            className="absolute bottom-4 left-80"
                                            />
                                        )
                                    )}

                                </label>
                            
                                {errorLogin.usser && <ErrorAlert error={errorLogin.usser} />}

                                <label className="w-full text-white relative">
                                    Contraseña
                                    <div>
                                        <FontAwesomeIcon icon={faLock} style={{color: colorIcons.password,}} 
                                            className="absolute bottom-2 left-2 size-7"
                                        />   
                                        <input type="password" className="block input input-bordered w-full mt-1 pl-10" 
                                            name="login-password" onBlur={handleBlur}/>  
                                    </div>
                                      {iconValidation.password === 'validated' ? (
                                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                            className="absolute bottom-4 left-80"
                                        />

                                    ) : (
                                        iconValidation.password === 'error' && (
                                        <FontAwesomeIcon icon={faCircleXmark} style={{color: "#000000"}} 
                                            className="absolute bottom-4 left-80"
                                        />

                                        )
                                    )}
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