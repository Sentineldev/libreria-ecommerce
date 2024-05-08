import { loginData } from "./typesLogin";


const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;




export function isEmptyUsser(usser:string) {
    return usser === '' ? true : false;
}

export function isEmail(usser:string){
    return regexEmail.test(usser) ? true : false
}

export function isEmptyPassword(password:string) {
    return password === '' ? true : false;
 }


 
export function validateInput(input: EventTarget & HTMLInputElement){
    const validation = {
        usser: '',
        password: ''
    }

    switch(input.name){
        case 'login-usser':
            isEmail(input.value) 
                ? validation.usser = 'validated'
                : validation.usser = 'invalidated'
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
        usser: '',
        password: ''
    }

    if(isEmptyUsser(loginData.userName)){
        errorLogin.usser = 'El corrreo no puede estar vacío'
    }else if(!isEmail(loginData.userName)){
        errorLogin.usser = 'No es un correo válido'
    }

    if(isEmptyPassword(loginData.userPassword)){
        errorLogin.password = 'La contraseña no puede estar vacía'
    }

    return errorLogin

}


