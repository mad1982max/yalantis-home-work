import { useContext } from "react";
import CTX from "../../Context/localContext";
import { Link } from "react-router-dom";
import "./productCard.css";
import getImageByName from "../../Services/getImage";

const ProductCard = (props) => {
  const { name, price, origin, id } = props.product;
  const { setBasket } = useContext(CTX);

  const clearNameOfProduct = name.split(" ")[2].toLowerCase();
  let currentImage = getImageByName(clearNameOfProduct);

  const addToCart = (e) => {
    e.preventDefault();
    setBasket((prev) => [...prev, props.product]);
  };

  return (
    <div className="product-shadow-box">
      <Link to={`/product/${id}`}>
        <div className="product-wrapper">
          <div className="product-img">
            <img src={currentImage} alt="dummy img" />
          </div>
          <div className="product-name">{name}</div>
          <div className="product-origin">{origin.toUpperCase()}</div>
          <div className="basket-wrapper-card">
            <div className="product-price">$ {price}</div>
            <button className="add-to-cart_button" onClick={addToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
