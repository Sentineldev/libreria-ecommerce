import useHello from "../../hooks/useHello";
import { NavBar } from "../../components/Navbar";
import BackgroundLanding from "../landing/Background-landing.jpg"

export default function Index() {


    const { hello, loading } = useHello();

    return (
       <div className="bg-cover h-screen w-screen " style={{backgroundImage: `url(${BackgroundLanding})`}}>
          <NavBar/>
          
       </div>
    );
}