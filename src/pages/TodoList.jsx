import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import {fetchTodos} from '../store/middlewares'

const TodoList = () => {
    const {isLoading, todos, errorMessage} = useSelector(store => store.todo);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos)
    }, [])

  return (
    <div>
        <Nav />
        <h2>All Post</h2>
        {isLoading && <h2>Loading.....</h2>}
        {errorMessage &&  <h2>{errorMessage}</h2>}
        <ul>
            {todos.map(item => (
                <li key = {item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList