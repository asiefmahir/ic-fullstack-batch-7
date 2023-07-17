import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul>
        <li>
            <Link to='/posts'>Posts</Link>
        </li>
        <li>
            <Link to='/todos'>Todos</Link>
        </li>
         <li>
            <Link to='/counter'>Counter</Link>
        </li>
    </ul>
  )
}

export default Nav