import { loginData } from "../types/typesLogin";


const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;




export function isEmptyuser(user:string) {
    return user === '' ? true : false;
}

export function isEmail(user:string){
    return regexEmail.test(user) ? true : false
}

export function isEmptyPassword(password:string) {
    return password === '' ? true : false;
 }


 
export function validateInput(input: EventTarget & HTMLInputElement){
    const validation = {
        user: '',
        password: ''
    }

    switch(input.name){
        case 'login-user':
            isEmail(input.value) 
                ? validation.user = 'validated'
                : validation.user = 'invalidated'
            break;

        case 'login-password':

            !isEmptyPassword(input.value) 
                ? validation.password = 'validated' 
                : validation.password = 'invalidated'
            break;

        default:
            break;
    }

    return validation
}


export function onValidateLogin(loginData: loginData){
    const errorLogin = {
        user: '',
        password: ''
    }

    if(isEmptyuser(loginData.userName)){
        errorLogin.user = 'El corrreo no puede estar vacío'
    }else if(!isEmail(loginData.userName)){
        errorLogin.user = 'No es un correo válido'
    }

    if(isEmptyPassword(loginData.userPassword)){
        errorLogin.password = 'La contraseña no puede estar vacía'
    }

    return errorLogin

}


