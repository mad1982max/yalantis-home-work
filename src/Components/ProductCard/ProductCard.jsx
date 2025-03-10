import { Link } from "react-router-dom";
import QuantityBtnGroupContainer from "Containers/QuantityBtnGroupContainer/QuantityBtnGroupContainer";
import Button from "Components/Button/Button";
import wrench from "Assets/img/ico/edit.png";
import "Components/ProductCard/productCard.css";

const ProductCard = ({ product, linkEnable, handleClick }) => {
  return (
    <div className="product-shadow-box">
      <Link
        className="product-link"
        to={`/product/${product.id}`}
        onClick={(e) => {
          if (!linkEnable) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}>
        <div
          className={
            linkEnable
              ? "product-wrapper product-wrapper-shadow"
              : "product-wrapper"
          }>
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
                <>
                  <Button
                    onClick={(e) => handleClick(e, product)}
                    className="editBtn"
                    type="button"
                    image={wrench}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
