import {useState} from 'react'
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';

import { useCreateTodoMutation } from '../store/reducers/todo';

const TodoForm = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [createTodo] = useCreateTodoMutation();
    const navigate = useNavigate()
    const createHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            userId: 2,
            id: Date.now(),
            title: todoTitle,
            completed: false
        };

        createTodo(newTodo);
        navigate('/todos')
    }
    return (
            <>
                <Nav />
                <form onSubmit={createHandler}>
                    <input type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)}/>
                    <button type="submit">Create Todo</button>
                </form>
            </>
    )
}

export default TodoForm