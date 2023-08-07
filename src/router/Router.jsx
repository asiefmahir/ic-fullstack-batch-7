import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Counterfc from "../components/Counterfc";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Home />}/>
                <Route path = '/fc' element ={<Counterfc />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router