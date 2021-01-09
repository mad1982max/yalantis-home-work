import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loader from "Components/Loader/Loader";
import ExtendedProductCard from "Components/ExtendedProductCard/ExtendedProductCard";
import api from "Helpers/api";
import "Components/ProductPage/productPage.css";

const ProductPage = (props) => {
  const id = props.match.params.id;

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  const goTo = (path) => {
    history.push(path);
  };

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        setIsLoading(true);
        const product = await api.getProductById(id);
        setProduct(product.data);
        setIsLoading(false);
      } catch (error) {
        const msg = `${error.name}: ${error.message}`;
        history.push({ pathname: "/error", state: msg });
      }
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
