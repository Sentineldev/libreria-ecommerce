import { NavBar } from "../../components/Navbar";
import BackgroundLanding from "../landing/pictures/Background-landing.jpg"
import Portada from "../landing/pictures/portada_la-rueda-del-tiempo-n-0614-el-senor-del-caos_robert-jordan_202111161743.jpg"
import { useQuote } from "./hooks/useQuote";
import { Footer } from "./Footer";

export default function Index() {
   const {quotes, quoteIndex, changeQuoteWithCircle}  = useQuote();

    return (
       <div className="w-full h-full">
			<div className="bg-cover h-screen w-full bg-black grid grid-cols-1 grid-rows-[5rem_auto]" style={{backgroundImage: `url(${BackgroundLanding})`}}>
				<NavBar/>
				<div className="grid grid-cols-[70%_30%] grid-rows-[70%_20%_auto] h-full text-white">
					<section className="relative">
						<h2 className="text-3xl absolute top-6 left-16">Robert Jordan</h2>
						<h1 className="text-6xl absolute top-24 left-16">EL SEÑOR DEL CAOS</h1>
						<p className="text-xl absolute top-40 left-16 text-[#C9C9C9] font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis minus neque tenetur, maiores aspernatur velit temporibus harum eos esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam tenetur veritatis provident ab magnam nobis! Neque itaque placeat at.</p>
					</section>
					<section className="relative flex items-center">
						<div className="absolute left-2 w-1/2 h-3/5 bg-white">
							<figure className="w-full h-full"><img src={Portada} alt="El Señor del Caos" className="w-full h-full"/></figure>
						</div>
					</section>
					
					<section className="col-span-2  grid grid-cols-[100%]">
						<div className="col-span-1">
							<div className="h-full w-full">
								<div className="h-full w-full relative">
									<h2 className="text-2xl text-[#B3B3B3 absolute left-20">{quotes[quoteIndex].name}</h2>
									<p className="text-xl absolute left-16 top-10">{quotes[quoteIndex].opinion}</p>
								</div>
							</div>
						</div>
					</section>
					<div>
						<div className="col-span-2 flex justify-center items-center gap-10 relative bottom-10">
							{quotes.map((_, i)=>(
								<div key={i} className={`rounded-full size-7 bg-[#cccccc4b] ${i != quoteIndex ? "bg-[#ccccccc0] size-10" : ""}`}
									onClick={()=>{changeQuoteWithCircle(i)}}>
								</div>
							))}
						</div>
					</div>  
				</div>
			</div>
			<Footer/>
		</div>
    );
}
