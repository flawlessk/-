import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response =  await axios.get("https://fakestoreapi.com/products")
        .catch((err) => {
            alert("error", err);
        })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products, "productebi");

    return (
        <ProductComponent />
    )
}

export default ProductListing;