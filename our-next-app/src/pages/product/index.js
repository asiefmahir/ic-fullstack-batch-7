import Link from "next/link"
const Products = ({products}) => {
    
  return (
    <div>
        <h2>All Products</h2>
        <ul>
            {products.map(item => (
                <Link key={item.id} href={`/product/${item.id}`}>
                    <li>{item.title}</li>
                </Link>
            ))}
            
        </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:4000/products`)
  const products = await res.json()
  return { 
    props: {
        products
    },
    revalidate: 15
  }
}


/**
 * Prerendering
 * 1) Static Generation -> Default
 *    -> i) Static generation
 *    -> ii) Incremental Static generation (ISR)
 *    -> iii) On Demand Incremental Static generation (ISR)
 * 2) Server Side Generation -> 
 */

export default Products