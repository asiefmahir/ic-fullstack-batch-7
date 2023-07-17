import Nav from '../components/Nav'
import { Link } from 'react-router-dom';
import { useFetchLogic } from '../useFetch';

const Posts = () => {
    const {data: posts, isLoading, errorMessage} = useFetchLogic(`https://jsonplaceholder.typicode.com/posts?_limit=5`, [])
    return (
        <div>
            <Nav />
            {isLoading && <h2>Loading......</h2>}
            {errorMessage && <h2>{errorMessage}</h2>}
            <ul>
                {posts.map(item => (
                    <li key={item.id}>
                        <Link to={`/posts/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts