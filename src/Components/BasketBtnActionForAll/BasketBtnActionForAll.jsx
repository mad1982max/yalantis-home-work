import { useSelector } from "react-redux";
import { useActionForAllBasket } from "Bus/Helpers/actionForAllBasket";
import { basket } from "Bus/Selectors/basketSelector";

const BasketBtnActionForAll = () => {
  const goodsInBasket = useSelector(basket);
  const { buyAll, deleteAll } = useActionForAllBasket();

  return (
    <>
      <button
        onClick={deleteAll}
        disabled={goodsInBasket.length === 0}
        type="button"
        id="del-basket">
        DELETE ALL
      </button>
      <button
        type="button"
        disabled={goodsInBasket.length === 0}
        onClick={buyAll}
        id="buy-basket">
        BUY ALL
      </button>
    </>
  );
};

export default BasketBtnActionForAll;
