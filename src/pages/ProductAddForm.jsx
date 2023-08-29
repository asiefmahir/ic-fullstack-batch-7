import { useContext, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct } from "../services/product";
import Header from "../components/Header";
import { AuthContext } from "../contexts/Auth";

const ProductForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        description: "",
    });
    const authContext = useContext(AuthContext);
    const queryClient = useQueryClient();

    const createProductMutation = useMutation(createProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        },
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handlePhoto = (e) => {
        console.log(e.target.files);
        setProduct({ ...product, image: e.target.files[0] });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("image", product.image);
        formData.append("description", product.description);
        formData.append("price", product.price);
        createProductMutation.mutate(formData);
       
    };


    return (
        <>
            <Header />
            <form
                encType='multipart/form-data'
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                onSubmit={handleSubmit}
            >
                <p>Title:</p>
                <input
                    value={product.title}
                    onChange={handleChange}
                    name="title"
                    style={{ display: "block", width: "80%" }}
                    required
                />
                <br />
                <p>Price:</p>

                <input
                    value={product.price}
                    onChange={handleChange}
                    name="price"
                    style={{ display: "block", width: "80%" }}
                    type="number"
                    required
                />
                <br />

                <p>Description:</p>
                <input
                    value={product.description}
                    onChange={handleChange}
                    name="description"
                    style={{ display: "block", width: "80%" }}
                    type="text"
                    required
                />
                <br />
                <p>Image URL:</p>

                <input
                    onChange={handlePhoto}
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    style={{ display: "block", width: "80%" }}
                    type="file"
                />
                <br />
                <input type="submit" />
            </form>
        </>
    );
};

export default ProductForm;
