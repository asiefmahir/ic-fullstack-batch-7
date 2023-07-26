import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import PostList from "../pages/PostList";
import TodoList from "../pages/TodoList";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shop />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/posts" element={<PostList />}/>
                <Route path="/todos" element={<TodoList />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router