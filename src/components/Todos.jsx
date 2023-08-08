import React, { Component } from "react";
import { withFetch } from "../hoc/withFetch";

class Todos extends Component {
	

	render() {
        const {isLoading, data: todos, errorMessage} = this.props
		return (
            <div>
                <h2>All todos</h2>
                {isLoading && <h2>Loading...</h2>}
                {errorMessage && <h3>{errorMessage}</h3>}
                <ul>
                    {todos?.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        )
	}
}

// export default withFetch(Todos, `https://jsonplaceholder.typicode.com/todos?_limit=5`, [])
export default Todos
