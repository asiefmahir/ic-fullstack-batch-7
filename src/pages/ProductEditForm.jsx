import { useState } from "react";
import { useParams } from "react-router-dom";

import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

import { updateProduct, getProductById } from "../services/product";
import Header from "./../components/Header";

const ProductEditForm = () => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    });

    const {id} = useParams();
    const {data} = useQuery([`products ${id}`, id], () => getProductById(id))

    const client = useQueryClient()

    const createUpdateMutation = useMutation((obj) => updateProduct(obj), {
        onSuccess: () => {
          client.invalidateQueries(['products'])
        }
    })

    const handleChange = (e) => {
      setProduct({...product, [e.target.name]: e.target.value})
    }

    const handlePhoto = (e) => {
      console.log(e.target.files[0]);
      setProduct({...product, image: e.target.files[0]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', product.title || data?.title);
        formData.append('price', product.price || data?.price);
        formData.append('description', product.description || data?.description);
        formData.append('image', product.image || data?.image);

        createUpdateMutation.mutate({id: id, product: formData})
        // createProduct

    };
    return (
        <>
            <Header />
            <form
                encType="multipart/form-data"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                onSubmit={handleSubmit}
            >
                <p>Product title:</p>
                <input
                    onChange={handleChange}
                    value={product.title || data?.title}
                    required
                    name="title"
                    style={{ display: "block", width: "80%" }}
                    type="text"
                />
                <br />
                <p>Product Price:</p>
                <input
                    onChange={handleChange}
                    value={product.price || data?.price}
                    required
                    name="price"
                    style={{ display: "block", width: "80%" }}
                    type="number"
                />
                <br />
                <p>Product Description:</p>
                <input
                    onChange={handleChange}
                    value={product.description || data?.description}
                    required
                    name="description"
                    style={{ display: "block", width: "80%" }}
                    type="text"
                />
                <br />
                <p>Product URL:</p>
                <input
                    onChange={handlePhoto}
                    required
                    name="photo"
                    style={{ display: "block", width: "80%" }}
                    type="file"
                />
                <br />
                <input type="submit" value='Update Product'/>
            </form>
        </>
    );
};

export default ProductEditForm;