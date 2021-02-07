import { Link } from "react-router-dom";
import QuantityBtnGroupContainer from "Containers/QuantityBtnGroupContainer/QuantityBtnGroupContainer";
import "Components/ProductCard/productCard.css";

const ProductCard = ({ product, linkEnable }) => {
  return (
    <div className="product-shadow-box">
      <Link
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
                  <div>WRENCH</div>
                  {/* <PortalButton modalPayload={{ type: "editForm", product }} /> */}
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
