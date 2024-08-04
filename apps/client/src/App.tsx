import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/landing/sign-up/SignUpForm";
import Index from "./pages/landing";
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="store">
            <Route path="" element={<Index/>}/>
            <Route path="sign-up" element={<SignUp/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}