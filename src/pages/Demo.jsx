import Nav from '../components/Nav';
// import {fetchTodos} from '../store/reducers/todo''
import { useGetAllTodosQuery } from '../store/reducers/todo';

const Demo = () => {
    // const {isLoading, todos, errorMessage} = useSelector(store => store.todo);
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchTodos())
    // }, [])
    console.log("Demo Rerender");

    const {isError, isFetching, data: todos, error} = useGetAllTodosQuery();

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
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Demo