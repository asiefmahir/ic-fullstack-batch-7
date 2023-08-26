import {useRef, useContext} from 'react'
import { CartContext } from '../contexts/Cart';
import { AuthContext } from '../contexts/Auth';
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { createOrder } from '../services/order';
import Header from '../components/Header';



const AddressForm = () => {
    const {cart} = useContext(CartContext);
    const authContext = useContext(AuthContext);
    const queryClient = useQueryClient()
    const orderCreateMutation = useMutation(createOrder, {
        onSuccess: () => {
            queryClient.invalidateQueries(['orders'])
        }
    })
    let price = 0;
    cart.forEach(item => price += (item.price * item.quantity));
    const addressInputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            title: `Order ID- ${Math.random() * 10}`,
            price: price,
            products: cart.map(item => item._id),
            user: authContext?.user?._id,
            shippingAddress: addressInputRef.current.value
        }

        orderCreateMutation.mutate(order)


    }
  return (
    <div >
        <Header />
        <form style = {{display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column'}} onSubmit = {handleSubmit}>
            <label htmlFor="shippingAddress">Shipping Address :</label>
            <br />
            <br />
            <input type="text" name = 'shippingAddress' ref = {addressInputRef} />
            <br />
            <br />
            <input type="submit" value="Place Order" />
        </form>
    </div>
  )
}

export default AddressForm