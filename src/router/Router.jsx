import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Cart from '../pages/Cart'




const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/cart" element={<Cart />}/>


        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter