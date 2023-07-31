import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
// import {fetchTodos} from '../store/reducers/todo''
import { useGetAllTodosQuery, useRemoveTodoMutation } from '../store/reducers/todo';

const TodoList = () => {
    // const {isLoading, todos, errorMessage} = useSelector(store => store.todo);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchTodos())
    // }, [])

    const {isError, isFetching, data: todos, error} = useGetAllTodosQuery();
    const [removeTodo] = useRemoveTodoMutation()

  return (
    <div>
        <Nav />
        <h2>All Post</h2>
        {isFetching && <h2>Loading.....</h2>}
        {isError &&  <h2>{error.message}</h2>}
        <ul>
            {todos?.map(item => (
                <li key = {item.id}>
                    <p>{item.title}</p>
                    <button onClick={() => removeTodo(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList