import { useMutation, useQueryClient } from "@tanstack/react-query";
import { icons } from "../assets";
import { removeUser, updateUser } from "../services/user";

function UserRow({ item }) {
    const queryClient = useQueryClient();


    const removeUserMutation = useMutation((id) => removeUser(id), {
        onSuccess: () => {
            queryClient.invalidateQueries(["users"]);
        },
    });

    const updateUserMutation = useMutation(updateUser, {
        onSuccess : () => {
            queryClient.invalidateQueries(['users'])
        }
    })

    return (
         <tr>
            <td>
                {item.name}
            </td>
            <td><p>{item.username}</p></td>
            <td> {item.email}</td>
            <td>
                {item.role}
            </td>
            <td>
                {item?.role === 'user' && (
                <button onClick = {() => updateUserMutation.mutate({id: item._id, obj: item})}>
                    Make Admin
                </button>
            )}
            </td>
            <td>
               {item.role !== 'super-admin' && (
                 <img
                    alt={item.name}
                    className="product-icon"
                    src={icons.crossIcon}
                    onClick={() => removeUserMutation.mutate(item._id)}
                />
               )}
            </td>
        </tr>
    );
}

export default UserRow;
