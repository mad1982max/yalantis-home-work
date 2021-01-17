import { useContext } from "react";
import { basketCTX } from "Helpers/basket/context";
import "Components/HeaderBasketWidget/headerBasketWidget.css";

const HeaderBasketWidget = () => {
  const { basket } = useContext(basketCTX);

  const countQuantity = (arr, keyToCount) =>
    arr.reduce((accum, item) => accum + item[keyToCount], 0);

  const countSum = (arr, priceKey, quantityKey) => {
    return arr.reduce(
      (sum, product) => sum + product[priceKey] * product[quantityKey],
      0
    );
  };
  return (
    <div className="basket-wrapper">
      <div className="basket-number">
        {basket.length > 0 ? countQuantity(basket, "quantity") : 0}
      </div>

      <div className="basket-value">
        {basket.length > 0 ? countSum(basket, "price", "quantity") + " $" : ""}
      </div>
    </div>
  );
};

export default HeaderBasketWidget;
