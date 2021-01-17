import { Link } from "react-router-dom";

import ChangeQuantityBtnGroup from "Components/ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";
import "Components/ProductCard/productCard.css";

const ProductCard = ({ product, addToCart }) => {
  // console.log("render ProductCard");

  return (
    <div className="product-shadow-box">
      <Link to={`/product/${product.id}`}>
        <div className="product-wrapper">
          <div className="product-img">
            <img src={product.imgSrc} alt="dummy img" />
          </div>
          <div className="product-name">{product.name}</div>
          <div className="product-origin">{product.origin}</div>
          <div className="basket-wrapper-card">
            <div className="product-price">$ {product.price}</div>

            <div className="basket-group">
              {product.quantity !== 0 ? (
                <>
                  <div className="replacer-add-to-cart-btn">
                    <div className="bg-as-add-to-cart">
                      <ChangeQuantityBtnGroup
                        product={product}
                        addToCart={addToCart}
                      />
                    </div>
                    <div className="badge">{product.quantity}</div>
                  </div>
                </>
              ) : (
                <button
                  className="add-to-cart_button"
                  onClick={(e) => addToCart(e, "incrementOne")}>
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
