import {useRouter} from 'next/router'


const Order = () => {
    const router = useRouter()

    const handleOrder = () => {
        router.push('/product')
    }
  return (
    <div>
        <h2>Order Page</h2>
        <button onClick={handleOrder} >Complete Order</button>
    </div>
  )
}

export default Order
