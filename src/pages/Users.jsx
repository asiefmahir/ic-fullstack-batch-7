import { useQuery } from "@tanstack/react-query";
import Header from "../components/Header";
import UserRow from "../components/UserRow";
import { getAllUsers } from "../services/user";


const Users = () => {
    const { data, isError, error, isLoading } = useQuery(
        ["users"],
        getAllUsers
    );
  return (
   <>
            <Header />
            <div className="account-setting__content">
                <div className="account-setting__content__title">
                    <h4>User list in your cart</h4>
                </div>
                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Role option</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(item => (
                                <UserRow key = {item._id} item = {item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </>
  )
}

export default Users