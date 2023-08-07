import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class Posts extends Component {
	

	render() {
        console.log(this.props);
        const {isLoading, data: posts, errorMessage} = this.props
		return (
            <div>
                <h2>All Posts</h2>
                {isLoading && <h2>Loading...</h2>}
                {errorMessage && <h3>{errorMessage}</h3>}
                <ul>
                    {posts?.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
	}
}

// export default withFetch(Posts, `https://jsonplaceholder.typicode.com/posts?_limit=5`, [])
export default Posts
