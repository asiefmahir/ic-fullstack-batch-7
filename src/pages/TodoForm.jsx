import {useState} from 'react'
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const TodoForm = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const client = useQueryClient()


    const createTodo = useMutation({
        mutationFn: async (newTodo) => (
            await fetch(`http://localhost:4000/todos`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            })
        ),
        onSuccess: () => {
            client.invalidateQueries(['Todos'])
        }
    })
    const navigate = useNavigate()
    const createHandler = (e) => {
        e.preventDefault();
        const newTodo = {
            userId: 2,
            id: Date.now(),
            title: todoTitle,
            completed: false
        };

        createTodo.mutate(newTodo);
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