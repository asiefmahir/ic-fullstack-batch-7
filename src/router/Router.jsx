import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router