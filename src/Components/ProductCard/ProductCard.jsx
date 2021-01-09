import { Link } from "react-router-dom";
import ChangeQuantityBtnGroup from "Components/ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";
import "Components/ProductCard/productCard.css";

const ProductCard = ({
  id,
  name,
  origin,
  price,
  imgSrc,
  quantity,
  addToCart,
}) => {
  return (
    <div className="product-shadow-box">
      <Link to={`/product/${id}`}>
        <div className="product-wrapper">
          <div className="product-img">
            <img src={imgSrc} alt="dummy img" />
          </div>
          <div className="product-name">{name}</div>
          <div className="product-origin">{origin}</div>
          <div className="basket-wrapper-card">
            <div className="product-price">$ {price}</div>

            <div className="basket-group">
              {quantity !== 0 ? (
                <>
                  <div className="replacer-add-to-cart-btn">
                    <div className="bg-as-add-to-cart">
                      <ChangeQuantityBtnGroup id={id} />
                    </div>
                    <div className="badge">{quantity}</div>
                  </div>
                </>
              ) : (
                <button className="add-to-cart_button" onClick={addToCart}>
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
