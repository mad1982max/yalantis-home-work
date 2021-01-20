import { useSelector } from "react-redux";
import {
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/selectors";
import "Components/HeaderBasketWidget/headerBasketWidget.css";

const HeaderBasketWidget = () => {
  const quantity = useSelector(totalQuantityBasketSelector);
  const sum = useSelector(totalSumBasketSelector);

  return (
    <div className="basket-wrapper">
      <div className="basket-number">{quantity}</div>

      <div className="basket-value">{quantity > 0 ? sum + " $" : ""}</div>
    </div>
  );
};

export default HeaderBasketWidget;
