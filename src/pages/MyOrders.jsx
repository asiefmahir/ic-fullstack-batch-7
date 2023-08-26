import { useQuery } from "@tanstack/react-query";
import { getOrderByUserId } from "../services/order";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/Auth";
import Header from "../components/Header";
import OrderItem from "../components/OrderItem";

const MyOrders = () => {
	const authContext = useContext(AuthContext);
	const id = authContext?.user?._id;
	console.log(authContext);
	const { data, isError, error } = useQuery([`orders ${id}`], () =>
		getOrderByUserId(id)
	);
	console.log(data);
	useEffect(() => {
		if (data?.length === 0) {
			alert("There are no orders of yours currently");
		}
	}, [data?.length]);
	return (
		<div>
			<Header />
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>My Orders</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>User Id</th>
								<th>Status</th>
								<th>Status Action</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{data?.map((item) => (
								<OrderItem key={item._id} item={item} />
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyOrders;
