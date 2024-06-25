import IconAccount from "../pages/landing/pictures/account-svgrepo-com.svg"

export function NavBar () {
  return(
    <nav className="flex bg-[#1C232B] h-20 items-center">
      <div className="flex w-1/2 justify-start text-4xl text-white ">
        <span className="relative left-4 font-bold">
          <h2>
            Legendarium
          </h2>
        </span>
      </div>

      <div className="flex justify-end items-center text-xl text-white relative w-1/2 ">
        <a href="" className="absolute right-96">
          <span>
              Inicio
          </span>
        </a>
        <button className="absolute right-72">
          <span>
              Buscar
          </span>
        </button>
          
        <a href="" className="absolute right-40">
          <span className="">
              Contactos
          </span>
        </a>

        <div>
          <img src={IconAccount} alt="Profile" className="h-14 relative right-10 cursor-pointer" />
        </div>
      </div>
  </nav>
  )
}