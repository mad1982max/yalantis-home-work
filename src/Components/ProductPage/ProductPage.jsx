import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import Loader from "../Loader/Loader";
import "./productPage.css";
import ExtendedProductCard from "../ExtendedProductCard/ExtendedProductCard";

const ProductPage = (props) => {
  const id = props.match.params.id;

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();
  const goTo = (path) => {
    history.push(path);
  };

  useEffect(() => {
    let timer;
    const getProduct = async (id) => {
      try {
        setIsLoading(true);
        const product = await api.getProductById(id);
        console.log("--product--", product.data);
        setProduct(product.data);
        timer = setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        console.log("--error--", error);
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      }
      return () => clearTimeout(timer);
    };
    getProduct(id);
  }, [id, history]);

  return (
    <>
      <div className="product-header">Product:</div>
      <div className="product-page">
        {isLoading ? <Loader /> : <ExtendedProductCard product={product} />}
      </div>

      <div className="basket-btn-group">
        <button onClick={() => goTo("/")} type="button" id="return">
          TO MAIN
        </button>
        <button type="button" onClick={() => goTo("/basket")} id="basket">
          TO BASKET
        </button>
      </div>
    </>
  );
};

export default ProductPage;
