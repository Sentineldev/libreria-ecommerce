import ErrorAlert from "../../hooks/errorAlert";
import {onValidateLogin, validateInput} from "./validationsLoginForm";
import { useState} from "react";
import { INITIALY_ERROR_LOGIN} from "../../consts/const";
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

    function handleValidationIcon(attribute: string, value: string){
        setIconValidation(prevState => ({
            ...prevState,
            [attribute]: value
        }));
    }

    function handleValidationColorIcon(attribute: string, color: string){
        setColorIcons( prevState => ({
            ...prevState, 
            [attribute]: color
        }))

    }


    function handleBlur(e: React.FocusEvent<HTMLInputElement>){
        const input = e.currentTarget;
        const validations = validateInput(input);
        
        if (validations.usser === 'validated') {
            input.classList.remove('input-error', 'bg-error');
            handleValidationIcon('usser', 'validated')
            handleValidationColorIcon('usser', '#1a890b')

        } else if(validations.usser === 'invalidated'){
            input.classList.add('input-error', 'bg-error');
            handleValidationIcon('usser', 'error')
            handleValidationColorIcon('usser', '#000000')
        }
    
        if (validations.password === 'validated') {
            input.classList.remove('input-error', 'bg-error');
            handleValidationIcon('password', 'validated')
            handleValidationColorIcon('password', '#1a890b')

        } else if(validations.password === 'invalidated'){
            input.classList.add('input-error', 'bg-error');
            handleValidationIcon('password', 'error')
            handleValidationColorIcon('password', '#000000')
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
            <div className="card xl:card-side bg-base-100 shadow-xl min-[320px]:h-3/4 min-[320px]:w-4/5 sm:h-3/4 lg:h-5/6 lg:w-1/2 xl:h-5/6 w-1/2">
                <div className="bg-gray-800 w-1/2  image-login blur-sm">
    
                </div>
                <div className="card-body xl:w-1/2">
                    <h1 className="text-center sm:text-xl xl:text-3xl text-white pb-3">INICIO DE SESIÓN </h1>
                        <div className="card-actions flex flex-col items-center">
                            <form className="w-full" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-2 w-full items-center">

                                    <label className="w-full text-white relative">
                                        Correo Electronico
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faEnvelope} style={{color: colorIcons.usser,}} 
                                                className="absolute bottom-2 left-2 size-7" />
                                            <input type="email" className="block input input-bordered w-full 
                                                mt-1 pl-10 min-[320px]:text-xs lg:text-base text-base" 
                                                name="login-usser" autoComplete="off" onBlur={handleBlur}
                                            />
                                        </div>
                                        {iconValidation.usser === 'validated' ? (
                                                <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                                    className="absolute right-2 bottom-4"
                                                />
                                            ) : (
                                                iconValidation.usser === 'error' && (
                                                    <FontAwesomeIcon icon={faCircleXmark} style={{color: "#000000"}} 
                                                        className="absolute right-2 bottom-4"
                                                    />
                                                )
                                        )}

                                    </label>
                                
                                    {errorLogin.usser && <ErrorAlert error={errorLogin.usser} />}

                                    <label className="w-full text-white relative">
                                        Contraseña
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={faLock} style={{color: colorIcons.password,}} 
                                                className="absolute bottom-2 left-2 size-7"
                                            />   
                                            <input type="password" className="block input input-bordered w-full 
                                                mt-1 pl-10 min-[320px]:text-xs" 
                                                name="login-password" onBlur={handleBlur}/>  
                                        </div>
                                        {iconValidation.password === 'validated' ? (
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1a890b"}} 
                                                className="absolute right-2 bottom-4"
                                            />

                                        ) : (
                                            iconValidation.password === 'error' && (
                                            <FontAwesomeIcon icon={faCircleXmark} style={{color: "#000000"}} 
                                                className="absolute right-2 bottom-4"
                                            />  

                                            )
                                        )}
                                    </label>
                                    {errorLogin.password && <ErrorAlert error={errorLogin.password} />}
                            
                                    <button type="submit" className="btn btn-primary w-1/2 text-white">Iniciar sesión</button>
                                </div>
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