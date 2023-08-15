import React from 'react'

const TodoList = ({todos}) => {
  return (
    <div>
        <h2>All Products</h2>
        <ul>
            {todos.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/todos')
    const todos = await res.json()
    return { 
        props : {
            todos
        }
    }
}
 



export default TodoList