import { useHistory } from "react-router-dom";
import BasketBtnActionForAll from "Components/BasketBtnActionForAll/BasketBtnActionForAll";
import BasketTable from "Components/BasketTable/BasketTable";
import "Components/BasketPage/basketPage.css";

const BasketPage = () => {
  const history = useHistory();
  const returnToMainPage = () => history.push("/");

  return (
    <div className="basket-page-wrapper">
      <div className="basket-name">Your Basket:</div>
      <BasketTable />
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
