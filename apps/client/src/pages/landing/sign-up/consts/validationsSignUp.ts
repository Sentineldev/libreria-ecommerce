const nameAndLastNameRegExp = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const postalCodeRegExp = /^[a-zA-Z0-9\s-]+$/;

type FormSignUp = {
    name: string,
    lastname: string,
    email: string,
    birthday: string,
    gender: string,
    direction: string,
    country: string,
    state: string,  
    city: string, 
    postalCode: string,
    password: string, 
    confirmPassword: string
}


function validateName(name: string): boolean{
    return nameAndLastNameRegExp.test(name)
}

function validateLastname(lastName: string):boolean{
    return nameAndLastNameRegExp.test(lastName)
}

function validateEmail(email:string){
    return emailRegExp.test(email)
}

function validatePostalCode(codePostal: string):boolean{
    return postalCodeRegExp.test(codePostal)
}


export function validationSignUp(data: FormSignUp){
    const errors = {
        name: "",
        lastname: "",
        email: "",
        birthday: "",
        gender: "",
        direction: "",
        country: "",
        state: "",  
        city: "", 
        postalCode: "",
        password: "", 
    }

    if(!validateName(data.name)){
        errors.name = "El nombre deben ser solo letras"
    }

    if(!validateLastname(data.lastname)){
        errors.name = "El apellido deben ser solo letras"
    }

    if(!validateEmail(data.email)){
        errors.name = "El correo electrónico no es válido"
    }

    if(validatePostalCode(data.postalCode)){
        errors.postalCode = "El código postal deben ser solo números o una combinación de números y letras"
    }

    if(data.password != data.confirmPassword){
        errors.password = "Las contraseñas deben ser iguales."
    }


}