import "./basketPage.css";
import { useHistory } from "react-router-dom";
import BasketBtnActionForAll from "../BasketBtnActionForAll/BasketBtnActionForAll";
import BasketTable from "../BasketTable/BasketTable";

const BasketPage = () => {
  const history = useHistory();
  const returnToMainPage = () => {
    history.push("/");
  };

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
