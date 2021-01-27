import "Components/HeaderBasketWidget/headerBasketWidget.css";

const HeaderBasketWidget = ({ sum, quantity }) => {
  return (
    <div className="basket-wrapper">
      <div className="basket-number">{quantity}</div>
      <div className="basket-value">{quantity > 0 ? sum + " $" : ""}</div>
    </div>
  );
};

export default HeaderBasketWidget;
