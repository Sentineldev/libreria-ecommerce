import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthContext from "../context/useAuthContext"
import { faArrowRightFromBracket, faArrowUpFromBracket, faBook, faTableList, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom";
export function NavBar () {

  const { isLogIn } = useAuthContext();

  return(
    <div className="navbar bg-base-100">
      <div className="navbar-start flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <div className="flex text-primary">
                <FontAwesomeIcon size="lg" icon={faBook}/>
                <a className="text-xl" href="/store">Catalogo</a>
              </div>
            </li>
            { !isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faUserPlus}/>
                  <a  className="text-xl" href="/sign-up">Registrarme</a>
                </div>
              </li>
            }
            { !isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faArrowUpFromBracket}/>
                  <a className="text-xl" href="/login">Ingresar</a>
                </div>
              </li>
            }
            { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon icon={faTableList}/>
                  <a className="text-xl" href="/store">Mis Ordenes</a>
                </div>
              </li>
            }
            { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon icon={faUser}/>
                  <a className="text-xl" href="/store">Cuenta</a>
                </div>
              </li>
            }
            { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faArrowRightFromBracket}/>
                  <a className="text-xl" href="/logout">Salir</a>
                </div>
              </li>
            }
          </ul>
        </div>
        <a href="/" className="h-fit">
          <img src={Logo} alt="" width={256}/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li>
              <div className="flex text-primary">
                <FontAwesomeIcon size="lg" icon={faBook}/>
                <a className="text-xl" href="/">Catalogo</a>
              </div>
            </li>
            { !isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faUserPlus}/>
                  <a  className="text-xl" href="/sign-up">Registrarme</a>
                </div>
              </li>
            }
            { !isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faArrowUpFromBracket}/>
                  <a className="text-xl" href="/login">Ingresar</a>
                </div>
              </li>
            }
            { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon icon={faTableList}/>
                  <NavLink className="text-xl" to="/account-orders">Mis Ordenes</NavLink>
                </div>
              </li>
            }
            {/* { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon icon={faUser}/>
                  <a className="text-xl" href="/">Cuenta</a>
                </div>
              </li>
            } */}
            { isLogIn &&
              <li>
                <div className="flex text-primary">
                  <FontAwesomeIcon size="lg" icon={faArrowRightFromBracket}/>
                  <a className="text-xl" href="/logout">Salir</a>
                </div>
              </li>
            }
        </ul>
      </div>
    </div>
  )
}