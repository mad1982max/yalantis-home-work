// import { useContext } from "react";
// import { basketCTX } from "Helpers_/basket/context";
import { useActionForAllBasket } from "Bus/Helpers/actionForAllBasket";
import { basketSelector } from "Bus/Selectors/selectors";
import "Components/BasketBtnActionForAll/basketBtnActionForAll.css";

const BasketBtnActionForAll = () => {
  // const { basket } = useContext(basketCTX);
  const { buyAll, deleteAll } = useActionForAllBasket();

  return (
    <>
      <button
        onClick={deleteAll}
        disabled={basketSelector.length === 0}
        type="button"
        id="del-basket">
        DELETE ALL
      </button>
      <button
        type="button"
        disabled={basketSelector.length === 0}
        onClick={buyAll}
        id="buy-basket">
        BUY ALL
      </button>
    </>
  );
};

export default BasketBtnActionForAll;
