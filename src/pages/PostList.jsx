import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../components/Nav';
import {fetchPosts} from '../store/middlewares'

const PostList = () => {
    const {isLoading, posts, errorMessage} = useSelector(store => store.post);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts)
    }, [])

  return (
    <div>
        <Nav />
        <h2>All Post</h2>
        {isLoading && <h2>Loading.....</h2>}
        {errorMessage && <h2>{errorMessage}</h2>}
        <ul>
            {posts.map(item => (
                <li key = {item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default PostList