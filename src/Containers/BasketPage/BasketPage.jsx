import { useHistory } from "react-router-dom";
import BasketBtnActionForAll from "Components/BasketBtnActionForAll/BasketBtnActionForAll";
import BasketTable from "Components/BasketTable/BasketTable";
import "Containers/BasketPage/basketPage.css";

const BasketPage = () => {
  const history = useHistory();

  const returnToMainPage = () => history.push("/");
  const goToProduct = (id) => {
    history.push(`/product/${id}`);
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
