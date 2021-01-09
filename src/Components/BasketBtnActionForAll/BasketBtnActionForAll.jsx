import { basketCTX } from "Context/localContext";
import { useContext } from "react";
import "Components/BasketBtnActionForAll/basketBtnActionForAll.css";

const BasketBtnActionForAll = () => {
  const { basket, setBasket } = useContext(basketCTX);

  const deletebasket = () => {
    let isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) setBasket([]);
  };

  return (
    <>
      <button
        onClick={deletebasket}
        disabled={basket.length === 0}
        type="button"
        id="del-basket">
        DELETE ALL
      </button>
      <button type="button" disabled id="buy-basket">
        BUY ALL
      </button>
    </>
  );
};

export default BasketBtnActionForAll;
