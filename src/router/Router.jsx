import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from '../pages/Posts'
import Todos from '../pages/Todos'
import PostDetails from "../pages/PostDetails";
import TodoDetails from "../pages/TodoDetails";
import Counter from "../pages/Counter";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/posts" element={<Posts />}/>
               <Route path="/posts/:postId" element={<PostDetails />}/>
               <Route path="/todos" element={<Todos />}/>
               <Route path="/todos/:todoId" element={<TodoDetails />}/>
               <Route path="/counter" element={<Counter />}/>


            </Routes>
        </BrowserRouter>
    )
}

export default Router