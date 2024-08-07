import { BooksBestSellers } from "./ConstBestSeller";


export function Footer(){
    return(
        <div className="flex flex-col h-screen bg-white">
            <section className="flex flex-col">
                <header className="w-full pt-4">
                    <h1 className="w-full text-2xl pl-6 text-primary font-bold">Los más vendidos</h1>
                </header>
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr]  lg:grid-rows-[47vh] lg:items-center gap-4">
                        <div className="col-span-1 flex justify-self-center flex-col gap-2 w-70 h-70 items-center pt-4">
                            <div className="w-full">
                                <img src={BooksBestSellers.first} alt="El Señor del Caos" className="h-64 w-64"/>
                            </div>
                            <div>
                                <button className="bg-white hover:bg-slate-200 rounded-lg w-28 h-10 text-black">Ver más</button>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-self-center  flex-col gap-2 w-70 h-70 items-center">
                            <div className="w-full">
                                <img src={BooksBestSellers.second} alt="La Tormenta" className="h-64 w-64"/>
                            </div>
                            <div>
                                <button className="bg-white hover:bg-slate-200 rounded-lg w-28 h-10 text-black">Ver más</button>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-self-center  flex-col gap-2 w-70 h-70 items-center pb-4">
                            <div className="w-full">
                                <img src={BooksBestSellers.third} alt="La Tormenta" className="h-64 w-64"/>
                            </div>
                            <div>
                                <button className="bg-white hover:bg-slate-200 rounded-lg w-28 h-10 text-black">Ver más</button>
                            </div>
                        </div>
                    </div>
                </div>
           </section>

            <section className="flex flex-col text-2xl h-[auto] text-white text-center pt-24 items-center pb-6">
                <div className="w-4/5 flex flex-col items-center">
                    <h2 className="text-3xl font-bold pb-10 text-primary">¡Únete hoy y comienza tu aventura literaria!</h2>
                    <p className="text-primary text-[1.2rem]">Sumérgete en universos infinitos, conoce personajes inolvidables y deja volar tu imaginación mientras exploras géneros que van desde la fantasía epica hasta la poesía más conmovedora.</p>
                    <p className="text-primary text-[1.2rem]">Registrate ahora para acceder a una amplia selección de libros, recomendaciones personalizadas y una comunidad de lectores apasionados que comparten tu amor por la lectura. Descubre el poder de transformador de las palabras y déjate llevar por la magia de la literatura.</p>    
                </div>
                <div className="w-full flex justify-center pt-6">
                    <a href="/sign-up" className="btn btn-primary">Registrarse gratis</a>
                </div>
            </section>
						
		</div>
    )
}