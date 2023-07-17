import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useFetchLogic } from '../useFetch';

const Todos = () => {
    const { data: todos, isLoading, errorMessage } = useFetchLogic(`https://jsonplaceholder.typicode.com/todos?_limit=5`, [])
    return (
        <div>
            <Nav />
            {isLoading && <h2>Loading...</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            <ul>
                {todos.map(item => (
                    <li key={item.id}>
                        <Link to={`/todos/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos