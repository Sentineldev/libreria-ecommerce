import { InputSignUp } from "./components/InputsSignUp";
import BackGroundSignUp from "./pictures/young-woman-reading.jpg";
import { LocationSelector } from "./components/LocationSelectors";
import { SuccessFullAlert } from "./components/SuccessFullAlert";
import { ErrorAlert } from "./components/ErrorAlert";
import { ItemsFormSignUp } from "./types/typesOfSignUp";
import { validationSignUp } from "./consts/validationsSignUp";
import { INITIALY_DATA_CUSTOMER } from "./consts/constSignUp";
import { useState, useRef } from "react";

function SignUp() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [errorsState, setErrorsState] = useState(INITIALY_DATA_CUSTOMER);

  function handleClean() {
    formRef.current?.reset();
    setErrorsState(INITIALY_DATA_CUSTOMER);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = Object.fromEntries(new window.FormData(e.currentTarget)) as ItemsFormSignUp;
    const errors = validationSignUp(fields);

    if (Object.values(errors).some(error => error !== "")) {
        setErrorsState(errors);
    } else {
        setErrorsState(INITIALY_DATA_CUSTOMER);

        const url = "http://localhost:3000/api/accounts/create";

        const customer = {
            firstName: fields.name,
            lastName: fields.lastname,
            birthDate: fields.birthday,
            gender: fields.gender,
            country: fields.country,
            city: fields.city,
            state: fields.state,
            address: fields.direction,
            postalCode: fields.postalCode,
        };

        const data = {
            email: fields.email,
            password: fields.password,
            customer,
        };

        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then(() => {
            setRegistrationSuccess(true);
            handleClean();
            setTimeout(() => setRegistrationSuccess(false), 12000);
        });
    }
}

  return (
    <main className="w-screen h-screen relative" style={{
      backgroundImage: `url(${BackGroundSignUp})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="h-full w-full absolute bg-[rgba(0,0,0,0.6)]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-cover w-1/2 h-1/2">
            <h2 className="text-2xl text-center text-white">Registro de Usuarios</h2>
            <form ref={formRef} className="bg-[#efefef] shadow-xl rounded border p-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] gap-2 text-white font-semibold">
                <div className="col-span-2">
                  <InputSignUp classNameLabel="flex flex-col text-center  text-black items-center w-full" classNameContainer="pl-2 col-span-2"
                    valueLabel="Nombres" inputType="text" nameInput="name"
                  />
                  {errorsState.name && <ErrorAlert ErrorMessage={errorsState.name} />}
                </div>
                <div className="col-span-2">
                  <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-" classNameContainer="pr-2 col-span-2"
                    valueLabel="Apellidos" inputType="text" nameInput="lastname"
                  />
                  {errorsState.lastname && <ErrorAlert ErrorMessage={errorsState.lastname} />}
                </div>

                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pl-2 col-span-full pr-2"
                  valueLabel="Correo Electrónico" inputType="email" nameInput="email"
                />

                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pl-2 col-span-2"
                  valueLabel="Fecha de Nacimiento" inputType="date" nameInput="birthday"
                />

                <div className="pr-2 col-span-2 flex items-end w-full">
                  <label className="w-full h-full text-black"> Género
                    <select className="block select select-primary w-full  h-14" name="gender">
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </label>
                </div>

                <LocationSelector />

                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pl-2 col-span-2"
                  valueLabel="Dirección" inputType="text" nameInput="direction"
                />
                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pr-2 col-span-2"
                  valueLabel="Código Postal" inputType="text" nameInput="postalCode"
                />
                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pl-2 col-span-2"
                  valueLabel="Contraseña" inputType="password" nameInput="password"
                />
                <InputSignUp classNameLabel="flex flex-col text-center text-black items-center w-full" classNameContainer="pr-2 col-span-2"
                  valueLabel="Confirmar Contraseña" inputType="password" nameInput="confirmPassword"
                />

                <div className="col-span-full ">
                  {errorsState.password && <ErrorAlert ErrorMessage={errorsState.password} />}
                </div>
              </div>

              {registrationSuccess && <SuccessFullAlert />}

              <div className="h-24 w-full mt-1 gap-1 flex flex-col justify-center items-center">
                <div className="flex gap-2">
                  <button type="button" className="btn btn-accent btn-sm sm:btn-sm md:btn-md lg:btn-md text-white" onClick={handleClean}>Limpiar</button>
                  <button type="submit" className="btn  btn-success btn-sm sm:btn-sm md:btn-md lg:btn-md text-white">Registrate</button>
                </div>
                <span className="text-black">¿Tienes una cuenta? <a href="/login" className="text-success">Inicia sesión aquí.</a></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
