import "./productCard.css";

const ProductCard = (props) => {
  const { name, price, origin } = props.product;
  return (
    <div className="product-shadow-box">
      <div className="product-wrapper">
        <div className="product-img">
          <img src="../../Shares/img/dummy.jpeg" alt="dummy img" />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-origin">{origin}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
