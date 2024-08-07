import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUpForm";
import Index from "./pages/landing";
import LoginIndex from "./pages/login-page/login";
import Logout from "./pages/logout/indx";
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="" element={<Index/>}/>
          <Route path="login" element={<LoginIndex/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
        <Route path="store">
            <Route path="" element={<Index/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}