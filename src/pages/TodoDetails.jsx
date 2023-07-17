import { useParams } from 'react-router-dom';
import Nav from '../components/Nav'
import { useFetchLogic } from '../useFetch';

const TodoDetails = () => {
    const { todoId } = useParams();

    const { data: todo, isLoading, errorMessage } = useFetchLogic(`https://jsonplaceholder.typicode.com/todos/${todoId}`, null)
    return (
        <div>
            <Nav />
            {isLoading && <h2>Loading......</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            <div className="post">
                <p>TodoId - {todo?.id}</p>
                <p>todo Title - {todo?.title}</p>
            </div>
        </div>
    )
}

export default TodoDetails