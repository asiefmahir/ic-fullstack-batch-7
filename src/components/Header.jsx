// import { useContext } from 'react'
import { Link } from 'react-router-dom';
// import { AuthContext } from '../contexts/Auth';

function Header() {
    // const authContext = useContext(AuthContext)
    return (
        <header className="header">
            <div className="container">
                <nav className="header__navbar">
                    <ul>
                        <li>
                            <Link to='/' >
                                Home
                            </Link>
                        </li>
                       <li>
                            <Link to='/cart'>
                                Cart
                            </Link>
                       </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header