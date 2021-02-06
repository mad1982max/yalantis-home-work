import { Link } from "react-router-dom";
import QuantityBtnGroupContainer from "Containers/QuantityBtnGroupContainer/QuantityBtnGroupContainer";
import { CURR_WORK_GOODS_ARR } from "Constants/constants";
import "Components/ProductCard/productCard.css";

const ProductCard = ({ product, source, linkEnable }) => {
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
              {source === CURR_WORK_GOODS_ARR.ALL ? (
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
