import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUpForm";
import Index from "./pages/landing";

//shopincart
import { Catalog } from "./pages/shopping-cart/Catalog";
import {CartProvider } from "./pages/shopping-cart/context/ContextCart";
 
import LoginIndex from "./pages/login-page/login";
import Logout from "./pages/logout/indx";
import AccountOrders from "./pages/account-orders";
import AppIndex from "./pages";
import OrderIndex from "./pages/account-orders/show";
import CartIndex from "./pages/cart";
export default function App() {
  return(
    <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route element={<AppIndex/>}>
              <Route path="" element={<Index/>}/>
              <Route path="catalog" element={<Catalog/>}/>
              <Route path="cart" element={<CartIndex/>}/>
              <Route path="account-orders" element={<AccountOrders/>}/>
              <Route path="account-orders/:id" element={<OrderIndex/>}/>
            </Route>
            <Route path="login" element={<LoginIndex/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="sign-up" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}