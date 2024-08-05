import { ItemsFormSignUp } from "../types/typesOfSignUp";
import { INITIALY_DATA_CUSTOMER } from "./constSignUp";

const nameAndLastNameRegExp = /^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$/;
const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const postalCodeRegExp = /^[a-zA-Z0-9\s-]+$/;

function validateName(name: string): boolean {
    return nameAndLastNameRegExp.test(name);
}

function validateLastname(lastName: string): boolean {
    return nameAndLastNameRegExp.test(lastName);
}

function validateEmail(email: string): boolean {
    return emailRegExp.test(email);
}

function validatePostalCode(postalCode: string): boolean {
    return postalCodeRegExp.test(postalCode);
}

export function validationSignUp(data: ItemsFormSignUp) {
    // Crear una copia del objeto de errores inicial
    const errors = { ...INITIALY_DATA_CUSTOMER };
    
    if (!validateName(data.name)) {
        errors.name = "El nombre debe contener solo letras";
    }

    if (!validateLastname(data.lastname)) {
        errors.lastname = "El apellido debe contener solo letras";
    }

    if (!validateEmail(data.email)) {
        errors.email = "El correo electrónico no es válido";
    }

    if (!validatePostalCode(data.postalCode)) {
        errors.postalCode = "El código postal debe contener solo números o una combinación de números y letras";
    }

    if (data.password !== data.confirmPassword) {
        errors.password = "Las contraseñas deben ser iguales.";
    }

    return errors;
}
