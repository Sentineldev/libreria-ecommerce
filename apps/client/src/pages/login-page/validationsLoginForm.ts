import { loginData } from "./typesLogin";


const regexEmail = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;




function isEmptyUsser(usser:string) {
    return usser === '' ? true : false;
}

function isEmail(usser:string){
    return regexEmail.test(usser) ? true : false
}

function isEmptyPassword(password:string) {
    return password === '' ? true : false;
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


