import { useState, useEffect } from "react";
import api from "../../Services/api";
import Loader from "../Loader/Loader";
import "./product.css";
import ProductCard from "../ProductCard/ProductCard";

const Product = (props) => {
  const id = props.match.params.id;
  // console.log("id", id);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;
    const getProduct = async (id) => {
      try {
        setIsLoading(true);
        const product = await api.getProductById(id);
        console.log("--product--", product.data);
        setProduct(product.data);
        timer = setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.log("--error--", error);
      }
      return () => clearTimeout(timer);
    };
    getProduct(id);
  }, [id]);

  return (
    <>
      <div className="product-name">Product:</div>
      <div className="product-page">
        {isLoading ? <Loader /> : <ProductCard product={product} />}
      </div>
    </>
  );
};

export default Product;
