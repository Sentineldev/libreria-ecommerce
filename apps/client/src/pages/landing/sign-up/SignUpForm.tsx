import { Input } from "./components/Inputs"
import BackGroundSignUp from "./pictures/image_3.svg"

function SignUp(){
    return(
			<main className="w-screen h-screen">
				<div className="w-full h-full  flex justify-center items-center">
					<div className="w-1/2 h-1/2">
						<form className="">
							<div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr] gap-2">
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Nombres" inputType="text"
								/>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pr-2 col-span-2" 
									valueLabel="Apellidos" inputType="text"
								/>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-full pr-2"	
									valueLabel="Correo Electrónico" inputType="email"
								/>	
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Fecha de Nacimiento" inputType="date"
								/>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pr-2 col-span-2" 
									valueLabel="Género" inputType="text"
								/>
								<div className="col-span-full grid grid-cols-[1fr_1fr_1fr] gap-2">
										<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-1" 
										valueLabel="País" inputType="text"
										/>
										<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-1" 
										valueLabel="Estado" inputType="text"
										/>
										<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pr-2 col-span-1" 
										valueLabel="Ciudad" inputType="text"
										/>
								</div>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Dirección" inputType="text"
								/>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pr-2 col-span-2"
								 valueLabel="Código Postal" inputType="text"
								 />
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pl-2 col-span-2" 
									valueLabel="Contraseña" inputType="password"
								/>
								<Input classNameLabel="flex flex-col text-center items-center w-full h-full" classNameContainer="pr-2 col-span-2" 
									valueLabel="Confirmar Contraseña" inputType="password"
								/>
							</div>
							<div className="h-24 w-full mt-1 gap-1 flex flex-col justify-center items-center">
								<button className="btn  btn-success btn-sm sm:btn-sm md:btn-md lg:btn-md text-white">Registrate</button>
								<span className="text-white">¿Tienes una cuenta? <a href="" className="text-success">Inicia sesión aquí.</a></span>
							</div>
						</form>
					</div>
				</div>
			</main>
    )

}

export default SignUp