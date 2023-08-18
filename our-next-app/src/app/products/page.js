export default async function ProductList () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`, {next: {revalidate: 10}});
    const products = await res.json()
  return (
    <div>
        {products?.map(item => (
            <li key={item.id}>
                {item.title}
            </li>
        ))}

        {/* Products */}
    </div>
  )
}

// export default ProductList