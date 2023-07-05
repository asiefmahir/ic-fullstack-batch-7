import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import Team from './pages/Team'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/about',
                element: <About />,
                children: [
                    
                ]
            },
            {
                path: '/team',
                element: <Team />
            }
        ]
    }
])