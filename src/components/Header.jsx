import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

function Header() {
	const authContext = useContext(AuthContext);
	return (
		<header className="header">
			<div className="container">
				<nav className="header__navbar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						{!authContext.isUserLoggedIn && (
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
						)}
						{authContext.isUserLoggedIn &&
							(authContext?.user?.role === "super-admin" ||
								authContext?.user?.role === "admin") && (
								<li>
									<Link to="/admin/products">Products</Link>
								</li>
							)}
						{authContext.isUserLoggedIn &&
							(authContext?.user?.role === "super-admin" ||
								authContext?.user?.role === "admin") && (
								<li>
									<Link to="/admin/users">Users</Link>
								</li>
							)}
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						{authContext.isUserLoggedIn &&
							(authContext?.user?.role === "super-admin" ||
								authContext?.user?.role === "admin") && (
								<li>
									<Link to="/admin/product-form">
										Add Product
									</Link>
								</li>
							)}
						{authContext.isUserLoggedIn && (
							<li>
								<Link to="/my-orders">My Orders</Link>
							</li>
						)}
						{!authContext.isUserLoggedIn && (
							<li>
								<Link to="/login">Login</Link>
							</li>
						)}

						{authContext.isUserLoggedIn &&
							(authContext?.user?.role === "super-admin" ||
								authContext?.user?.role === "admin") && (
								<li>
									<Link to="/admin/order-list">Order List</Link>
								</li>
						)}
						{authContext.isUserLoggedIn && (
							<li>
								<button onClick={() => authContext.logout()}>
									Logout
								</button>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
