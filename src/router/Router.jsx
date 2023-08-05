import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import TodoList from "../pages/TodoList";
import TodoForm from "../pages/TodoForm";
import Home from "../pages/Home";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>

                <Route path="/posts" element={<PostList />}/>
                <Route path="/todos" element={<TodoList />}/>
                <Route path="/todos/create" element={<TodoForm />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router