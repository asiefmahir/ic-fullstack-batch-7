import Nav from '../components/Nav';
import { useFetchPostsQuery } from '../hooks/useFetchPostsQuery';

const Home = () => {
    const {isFetching, isError, error, posts} = useFetchPostsQuery()
  return (
    <div>
        <Nav />
        <h2>All Post</h2>
        {isFetching && <h2>Loading.....</h2>}
        {isError && <h2>{error.message}</h2>}
        <ul>
            {posts?.map(item => (
                <li key = {item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Home