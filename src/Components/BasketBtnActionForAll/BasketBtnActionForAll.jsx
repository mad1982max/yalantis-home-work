import { useSelector } from "react-redux";
import { useActionForAllBasket } from "Bus/Helpers/actionForAllBasket";
import Button from "Components/Button/Button";
import { basket } from "Bus/Selectors/basketSelector";

const BasketBtnActionForAll = () => {
  const goodsInBasket = useSelector(basket);
  const { buyAll, deleteAll } = useActionForAllBasket();

  return (
    <>
      <Button
        title="DELETE ALL"
        onClick={deleteAll}
        disabled={goodsInBasket.length === 0}
      />

      <Button
        title="BUY ALL"
        onClick={buyAll}
        disabled={goodsInBasket.length === 0}
      />
    </>
  );
};

export default BasketBtnActionForAll;
