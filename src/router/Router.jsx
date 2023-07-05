import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from "../pages/About";
import Team from "../pages/Team";
import Root from "../pages/Root";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route path="/about" element={<About />}/>
                    <Route path="/team" element={<Team />}/>
                    <Route path="*" element={<h2>404 Not Found</h2>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router