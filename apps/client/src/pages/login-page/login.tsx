import ErrorAlert from "../../hooks/errorAlert";
const imageLogin = "https://img.huffingtonpost.com/asset/5ed1131b3000005f23156e60.jpeg?cache=2Ts07VoVl5&ops=crop_0_1473_2624_1968%2Cscalefit_720_noupscale"


function login (){
    return(
        <div className="container-login">
            <div className="card lg:card-side bg-base-100 shadow-xl ">
                <figure><img src={imageLogin} alt="Mujer Leyendo"/></figure>
                <div className="card-body">
                    <h1 className="text-center text-3xl text-white">INICIO DE SESIÓN </h1>
                    <form className="flex flex-col gap-5">
                        <label>
                            Correo Electronico
                            <input type="email" className="block input input-bordered w-full mt-1" required/>
                        </label>
                        <ErrorAlert error="Correo invalido."/>

                        <label>
                            Contraseña
                            <input type="password" className="block input input-bordered w-full mt-1" required/>
                        </label>
                        
                        <ErrorAlert error="Contraeña invalida"/>
                        
                        <div className="card-actions flex flex-col items-center ">
                            <button type="button" className="btn btn-primary w-full text-white">Iniciar sesión</button>
                            <a href="#" className="label-text-alt link link-hover">¿Olvidaste tu Contraseña?</a>
                            <a href="#" className="label-text-alt link link-hover">¿No te has registrado?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )

}

export default login; 