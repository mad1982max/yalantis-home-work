import { historyLib } from "Bus/Libs/history";
import BasketBtnActionForAll from "Components/BasketBtnActionForAll/BasketBtnActionForAll";
import BasketTable from "Components/BasketTable/BasketTable";
import "Containers/BasketPage/basketPage.css";

const BasketPage = () => {
  const returnToMainPage = () => {
    historyLib.push("/");
  };
  const goToProduct = (id) => {
    historyLib.push(`/product/${id}`);
  };

  return (
    <div className="basket-page-wrapper">
      <div className="basket-name">Your Basket:</div>
      <BasketTable goToProduct={goToProduct} />
      <div className="basket-btn-group">
        <button onClick={returnToMainPage} type="button" id="return">
          TO MAIN
        </button>
        <BasketBtnActionForAll />
      </div>
    </div>
  );
};

export default BasketPage;
