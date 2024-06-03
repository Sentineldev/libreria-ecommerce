export function NavBar () {
  return(
    <nav className="flex w-screen bg-[#00000033] h-20 items-center">
      <div className="flex w-1/2 justify-start text-4xl text-white pl-12">
        <span className="pl-2 font-bold">
          <h2>
            Legendarium
          </h2>
        </span>
      </div>

      <div className="flex w-1/2 justify-end text-xl gap-12 text-white ">
        <a href="">
          <span>
              Inicio
          </span>
        </a>
        <button>
          <span>
              Buscar
          </span>
        </button>
          
        <a href="">
          <span className="pr-2">
              Contactos
          </span>
        </a>
      </div>
  </nav>
  )
}