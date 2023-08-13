import Link from 'next/link';
import {useRouter} from 'next/router'

const ProductDetails = () => {
    const router = useRouter();
    console.log(router.query);
  return (
    <div>
        <Link href='/product'>
            <p>Go Back to Products</p>
        </Link>
        <h2>Product Details Page of {router.query.productId}</h2>
    </div>
  )
}

export default ProductDetails