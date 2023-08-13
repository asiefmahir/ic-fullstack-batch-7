import Link from "next/link"
const Products = ({products}) => {
    
  return (
    <div>
        <h2>All Products</h2>
        <ul>
            {products.map(item => (
                <Link href={`/product/${item.id}`}>
                    <li key={item.id}>{item.title}</li>
                </Link>
            ))}
            
        </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const products = await res.json()
  return { 
    props: {
        products
    }
  }
}


/**
 * Prerendering
 * 1) Static Generation -> Default
 * 2) Server Side Generation -> 
 */

export default Products