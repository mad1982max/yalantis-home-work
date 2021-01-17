import { Link } from "react-router-dom";
import ChangeQuantityBtnGroup from "Components/ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";
import "Components/ProductCard/productCard.css";

const ProductCard = ({
  product,
  incrementBasket,
  decrementBasket,
  deleteProductBasket,
}) => {
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
              <ChangeQuantityBtnGroup
                product={product}
                incrementBasket={incrementBasket}
                decrementBasket={decrementBasket}
                deleteProductBasket={deleteProductBasket}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
