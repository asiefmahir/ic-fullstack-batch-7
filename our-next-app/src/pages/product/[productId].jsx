import Link from 'next/link';
import {useRouter} from 'next/router'

const ProductDetails = ({product}) => {
    const router = useRouter();
    console.log(router.query);

    if (router.isFallback) {
      return (
        <h2>The page is generating in the hosting server</h2>
      )
    }


  return (
    <div>
        <Link href='/product'>
            <p>Go Back to Products</p>
        </Link>
        <div className="product-details">
            <h2>Title of the Product - {product?.title}</h2>
            <h3>ID Hello- {product?.id}</h3>
        </div>
    </div>
  )
}

export async function getStaticPaths() {
    return {
      paths: [
        {
          params: {productId: '1'}
        },
        {
          params: {productId: '2'}
        },
        {
          params: {productId: '3'}
        }
      ],
      fallback: true
    }
}


export const getStaticProps = async (context) => {
  const {params} = context
  const res = await fetch(`http://localhost:4000/products/${params.productId}`)
  const product = await res.json()
  return { 
    props: {
        product
    }
  }
}

export default ProductDetails