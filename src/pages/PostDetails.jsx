import { useParams } from 'react-router-dom';
import Nav from '../components/Nav'
import { useFetchLogic } from '../useFetch';

const PostDetails = () => {
  const { postId } = useParams();

  const { data: post, isLoading, errorMessage } = useFetchLogic(`https://jsonplaceholder.typicode.com/posts/${postId}`, null)
  return (
    <div>
      <Nav />
      {isLoading && <h2>Loading......</h2>}
      {errorMessage && <h2>{errorMessage}</h2>}
      <div className="post">
        <p>PostId - {post?.id}</p>
        <p>Post Title - {post?.title}</p>
        <p>Post Details - {post?.body}</p>
      </div>
    </div>
  )
}

export default PostDetails