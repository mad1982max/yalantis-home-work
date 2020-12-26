import "./productCard.css";
import getImageByName from "../../Services/getImage";

const images = require.context("../../Shares/img", true);

const ProductCard = (props) => {
  const { name, price, origin } = props.product;

  const type = name.split(" ")[2].toLowerCase();
  let currentImage = getImageByName(type);

  return (
    <div className="product-shadow-box">
      <div className="product-wrapper">
        <div className="product-img">
          <img src={currentImage} alt="dummy img" />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-origin">{origin.toUpperCase()}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
