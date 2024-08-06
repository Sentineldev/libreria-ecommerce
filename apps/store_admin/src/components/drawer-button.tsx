import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DrawerButton() {

    return (
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            <FontAwesomeIcon icon={faBars}/>
        </label>
    );
}