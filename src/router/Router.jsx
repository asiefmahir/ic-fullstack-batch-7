import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import MyOrders from "../pages/MyOrders"

import PrivateUserRoute from "../components/PrivateRoute"
import PrivateAdminRoute from "../components/PrivateAdminRoute"
import OrderList from "../pages/OrderList"
import AddressForm from "../pages/AddressForm"
import Users from '../pages/Users'
import ProductAddForm from '../pages/ProductAddForm'
import Products from '../pages/Products'
import ProductEditForm from '../pages/ProductEditForm'


const MainRouter = () => {
  
  return (
   <BrowserRouter>
        <Routes>
            <Route path= '/' element = {<Home />}/>
            <Route path = '/cart' element = {<Cart />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/signup' element = {<Signup />} />

            <Route path = '/order-placing-form' 
                element = {
                  <PrivateUserRoute>
                      <AddressForm />
                  </PrivateUserRoute>
                }
            />
            <Route path = '/my-orders' 
                element = {
                  <PrivateUserRoute>
                      <MyOrders />
                  </PrivateUserRoute>
                }
            />
             <Route path = '/admin/users' element = {
                <PrivateAdminRoute>
                  <Users />
                </PrivateAdminRoute>
              } 
            />

            <Route path = '/admin/products' element = {
                <PrivateAdminRoute>
                  <Products />
                </PrivateAdminRoute>
              } 
            />

            
            <Route path = '/admin/product-form' 
                element = {
                  <PrivateAdminRoute>
                      <ProductAddForm />
                  </PrivateAdminRoute>
                }
            />
            <Route path = 'admin/order-list' 
                element = {
                  <PrivateAdminRoute>
                      <OrderList />
                  </PrivateAdminRoute>
                }
            />
            <Route path = '/admin/product-edit-form/:id' 
                element = {
                  <PrivateAdminRoute>
                      <ProductEditForm />
                  </PrivateAdminRoute>
                }
            />
            {/* <Route path = '/products/:id' element = {<ProductDetails />}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter