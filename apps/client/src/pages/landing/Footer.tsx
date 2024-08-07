import useProducts from "./hooks/useProducts";
import ProductsDisplay from "./products/products-display";


export function Footer(){


    const { products } = useProducts(); 
    return(
        <div className="flex flex-col bg-white">
            <section className="flex flex-col">
                <header className="w-full pt-4">
                    {/* <h1 className="w-full text-2xl pl-6 text-primary font-bold">Los más vendidos</h1> */}
                </header>
                <div className="overflow-auto">
                    { <ProductsDisplay products={products}/> }
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