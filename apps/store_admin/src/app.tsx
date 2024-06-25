import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import ProductsIndex from "./pages/products/products";
import RegisterBookProduct from "./pages/products/register/register-book-product";
import UpdateBookProduct from "./pages/products/update/update-book-product";
import BookProductIndex from "./pages/products/display";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="inventory">
                    <Route path="auth" element={<Auth/>}/>
                    <Route path="products">
                        <Route path="" element={<ProductsIndex/>}/>
                        <Route path="register" element={<RegisterBookProduct/>}/>
                        <Route path="update/:id" element={<UpdateBookProduct/>}/>
                        <Route path=":id" element={<BookProductIndex/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}