import { Link } from "react-router-dom";
import QuantityBtnGroupContainer from "Containers/QuantityBtnGroupContainer/QuantityBtnGroupContainer";
import "Components/ProductCard/productCard.css";

const ProductCard = ({ product, linkEnable }) => {
  return (
    <div className="product-shadow-box">
      <Link
        to={`/product/${product.id}`}
        className={linkEnable ? null : "disabled-link"}>
        <div className="product-wrapper">
          <div className="product-img">
            <img src={product.imgSrc} alt="dummy img" />
          </div>
          <div className="product-name">{product.name}</div>
          <div className="product-origin">{product.origin}</div>
          <div className="basket-wrapper-card">
            <div className="product-price">$ {product.price}</div>

            <div className="basket-group">
              {linkEnable ? (
                <QuantityBtnGroupContainer product={product} />
              ) : (
                <div>KEY</div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
