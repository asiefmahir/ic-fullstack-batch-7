import { useMutation, useQueryClient } from "@tanstack/react-query";

import { icons } from "../assets";

import { removeOrder, updateOrder } from "../services/order";

const OrderRow = ({ item }) => {
    // const orderedDate = new Date(item.date).toLocaleDateString();

    const client = useQueryClient();
    const orderUpdateMutation = useMutation(updateOrder, {
        onSuccess: () => {
            client.invalidateQueries(["orders"]);
        },
    });

    const removeOrderMutation = useMutation(removeOrder, {
        onSuccess: () => {
            client.invalidateQueries(["orders"]);
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
                                payload: { status: "delivered" }
                            })
                        }
                    >
                        Make Delivered
                    </button>
                )}
            </td>
            {/* <td>{orderedDate}</td> */}
            <td>{item.total}</td>
            <td>
                <img
                    src={icons.crossIcon}
                    alt=""
                    className="product-icon"
                    onClick={() => removeOrderMutation.mutate(item._id)}
                />
            </td>
        </tr>
    );
};

export default OrderRow;
