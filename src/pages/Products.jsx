import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/product";
import ProductRow from "../components/ProductRow";
import Header from "../components/Header";

const Products = () => {
    const { data, isError, error, isFetching } = useQuery(
        ["products"],
        getAllProducts
    );
    return (
        <>
            <Header />
            <div className="product-section">
                <div className="product-section__heading">
                    <h4>Product list in your app</h4>
                </div>
                
                <div className="product-table-container">
                    <table>
                        <tbody>
                           {data?.length !== 0 &&
                            data?.map((item) => (
                                <ProductRow key={item._id} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isFetching && <h2>Loading........</h2>}
            {isError && <p>{error.message}</p>}
        </>
    );
};

export default Products;
