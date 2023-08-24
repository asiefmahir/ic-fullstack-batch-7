import { useQuery } from '@tanstack/react-query'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/product';

function Home() {

    const { data: products, isError, error } = useQuery(['products'], getAllProducts)

    return (
        <>
                <div>
                    <Header />
                    <div className="page-banner">
                        <div className="page-banner__details">
                            <div className="page-banner__details__title">
                                <h1>Our E-commerce Website</h1>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="section__head">
                                <div className="product__details__title">
                                    <h2>
                                        All Products
                                    </h2>
                                </div>
                            </div>
                            {products?.length > 0 && (
                                <div className="section__content">
                                <div className="grid three">
                                    {products?.map(product => (
                                        <ProductCard key = {product._id} product={product} />
                                    ))}
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            {isError && <p>{error.message}</p>}
        </>


    )
}

export default Home