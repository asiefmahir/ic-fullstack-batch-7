import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../contexts/Auth";

import { updateOrder } from "../services/order";

const OrderItem = ({ item }) => {

    const authContext = useContext(AuthContext);
    const userId = authContext?.user?._id

    const client = useQueryClient();
    const orderUpdateMutation = useMutation(updateOrder, {
        onSuccess: () => {
            client.invalidateQueries(["orders"]);
            client.invalidateQueries([`orders ${userId}`])
        },
    });

    return (
        <tr>
            <td>
                <p>{item.user}</p>
            </td>
            <td>{item.status}</td>
            <td>
                {item.status === "pending" && (
                    <button
                        onClick={() =>
                            orderUpdateMutation.mutate({
                                id: item._id,
                                payload: { status: "cancelled" }
                            })
                        }
                    >
                        Cancel Order
                    </button>
                )}
            </td>
            {/* <td>{orderedDate}</td> */}
            <td>{item.price}</td>
        </tr>
    );
};

export default OrderItem;
