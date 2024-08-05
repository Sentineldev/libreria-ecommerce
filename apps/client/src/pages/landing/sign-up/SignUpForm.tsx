import { InputSignUp } from "./components/InputsSignUp"
import BackGroundSignUp from "./pictures/young-woman-reading.jpg"
import { LocationSelector } from "./components/LocationSelectors"
import {SuccessFullAlert} from "./components/SuccessFullAlert"
import { useState} from "react"

function SignUp(){
	const [registrationSuccess, setregistrationSuccss] = useState(false)
	
	function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault()
		const fields = Object.fromEntries(new window.FormData(e.currentTarget))
		const { name, lastname, email, birthday, gender, direction, postal, password, country, city, state} = fields;
		
		let url = "http://localhost:3000/api/accounts/create";
		
		const customer = {
			firstName: name,
			lastName: lastname,
			birthDate: birthday,
			gender: gender,
			country: country,
			city: city,
			state: state,
			address: direction,
			postalCode: postal
		}

		const data = {
			email,
			password,
			customer
		}

		console.log(data)

		fetch(url, {
			method: "POST", 
			body: JSON.stringify(data), 
			headers: {
			  "Content-Type": "application/json",
			},
		  })
			.then((res) => res.json())
			.catch((error) => console.error("Error:", error))
			.then((response) =>  {
				console.log("Success:", response)
				setregistrationSuccss(true)
				setTimeout(()=> setregistrationSuccss(false), 10000) 
			});


	}

    return(
			<main className="w-screen h-screen"  style={{
				backgroundImage: `url(${BackGroundSignUp})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			  }}>
				<div className="w-full h-full  flex justify-center items-center">
					<div className="bg-cover w-1/2 h-1/2" >
						<h2 className="text-2xl text-center text-white">Registro de Usuarios</h2>
						<form className="" onSubmit={handleSubmit}>
							<div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] gap-2 text-white font-semibold">
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Nombres" inputType="text" nameInput="name"
								/>
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-" classNameContainer="pr-2 col-span-2" 
									valueLabel="Apellidos" inputType="text" nameInput="lastname"
								/>
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pl-2 col-span-full pr-2"	
									valueLabel="Correo Electrónico" inputType="email" nameInput="email"
								/>	
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Fecha de Nacimiento" inputType="date" nameInput="birthday"
								/>
							
								<div className="pl-2 pr-2 col-span-2 flex items-end w-full">
									<label className="w-full"> Género
										<select className="block select select-primary w-full  h-14"  name="gender">
											<option value="Masculino">Masculino</option>
											<option value="Femenino">Femenino</option>
											<option value="Otro">Otro</option>
										</select>
									</label>
								</div>
								
								<LocationSelector/>
								
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Dirección" inputType="text" nameInput="direction"
								/>
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pr-2 col-span-2"
								 valueLabel="Código Postal" inputType="text" nameInput="postal"
								 />
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Contraseña" inputType="password" nameInput="password"
								/>
								<InputSignUp classNameLabel="flex flex-col text-center items-center w-full" classNameContainer="pr-2 col-span-2" 
									valueLabel="Confirmar Contraseña" inputType="password" nameInput="confirmPassword"
								/>
							</div>

			  				{registrationSuccess && <SuccessFullAlert/>}

							<div className="h-24 w-full mt-1 gap-1 flex flex-col justify-center items-center">
								<div className="flex gap-2">
									<button className="btn  btn-success btn-sm sm:btn-sm md:btn-md lg:btn-md text-white" >Registrate</button>
									<button className="btn btn-accent btn-sm sm:btn-sm md:btn-md lg:btn-md text-white ">Limpiar</button>
								</div>
								<span className="text-white">¿Tienes una cuenta? <a href="" className="text-success">Inicia sesión aquí.</a></span>
							</div>
						</form>
					</div>
				</div>
			</main>
    )

}

export default SignUp