import {useQuery} from '@tanstack/react-query';
import OrderRow from '../components/OrderRow';

import { getAllOrders } from '../services/order';

import Header from './../components/Header';

const OrderList = () => {
  const {data} = useQuery(['orders'], getAllOrders)
  return (
    <div>
      <Header />
      <div className="account-setting__content">
        <div className="account-setting__content__title">
          <h4>All Orders</h4>
        </div>
        <div className="product-table-container">
          <table>
              <thead>
                  <tr>
                      <th>User Id</th>
                      <th>Status</th>
                      <th>Status Action</th>
                      {/* <th>Date</th> */}
                      <th>Remove Action</th>
                  </tr>
              </thead>
              <tbody>
                  {data?.map(item => (
                      <OrderRow key = {item._id} item = {item} />
                  ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderList