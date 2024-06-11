import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import ProductsIndex from "./pages/products/products";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="inventory">
                    <Route path="auth" element={<Auth/>}/>
                    <Route path="products" element={<ProductsIndex/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}