import "Components/HeaderBasketWidget/headerBasketWidget.css";

const HeaderBasketWidget = ({ sum, quantity, visibility }) => {
  return (
    <>
      {visibility && (
        <div className="basket-wrapper">
          <div className="basket-number">{quantity}</div>
          {quantity > 0 && <div className="basket-value">{sum}</div>}
        </div>
      )}
    </>
  );
};

export default HeaderBasketWidget;
