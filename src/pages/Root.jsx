import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Layout</h1>
        <nav>
          <ul>
            <li>
              <Link to='/about'>
                Go to About Page
              </Link>
            </li>
            <li>
             <Link to='/team'>
                Go to Team Page
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      <footer>
            <ul>
                <li>Footer Option 1</li>
                <li>Footer Option 1</li>
                <li>Footer Option 1</li>
                <li>Footer Option 1</li>
            </ul>
      </footer>
    </>
  );
}