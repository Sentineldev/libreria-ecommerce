import { Fragment } from "react/jsx-runtime";
import StorageUtils from "../../utils/storage";

export default function Logout() {


    StorageUtils.ClearToken();

    window.location.href = "/store"

    return (
        <Fragment></Fragment>
    );
}