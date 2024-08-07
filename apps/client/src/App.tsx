import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/landing/sign-up/SignUpForm";
import Index from "./pages/landing";
import { Catalog } from "./pages/shopping-cart/Catalog";
import {CartProvider } from "./pages/shopping-cart/context/ContextCart";

export default function App() {
  return(
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="store">
              <Route path="" element={<Index/>}/>
              <Route path="sign-up" element={<SignUp/>}/>
              <Route path="catalog" element={<Catalog/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}