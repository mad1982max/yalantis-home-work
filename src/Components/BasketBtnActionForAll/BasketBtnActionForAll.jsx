import { useContext } from "react";
import basketCTX from "Helpers/basket/context";
import useActionForAllBasket from "Helpers/actionForAllBasket";
import "Components/BasketBtnActionForAll/basketBtnActionForAll.css";

const BasketBtnActionForAll = () => {
  const { basket } = useContext(basketCTX);
  const { buyAll, deleteAll } = useActionForAllBasket();

  return (
    <>
      <button
        onClick={deleteAll}
        disabled={basket.length === 0}
        type="button"
        id="del-basket">
        DELETE ALL
      </button>
      <button
        type="button"
        disabled={basket.length === 0}
        onClick={buyAll}
        id="buy-basket">
        BUY ALL
      </button>
    </>
  );
};

export default BasketBtnActionForAll;
