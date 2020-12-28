import "./basket.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import BasketBtnActionForAll from "../BasketBtnActionForAll/BasketBtnActionForAll";
import ChangeQuantityBtnGroup from "../ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";
import basketCTX from "../../Context/localContext";

const Basket = () => {
  const { basket } = useContext(basketCTX);

  const history = useHistory();
  const returnToMainPage = () => {
    history.push("/");
  };

  const sum = () =>
    basket.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="basket-page-wrapper">
      <div className="basket-name">Your Basket:</div>
      {basket.length > 0 ? (
        <table className="basket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Full Name</th>
              <th>Origin</th>
              <th>Material</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product, i) => {
              const [, material, type] = product.name.split(" ");

              return (
                <tr key={product.id + i}>
                  <td>{++i}</td>
                  <td>{type}</td>
                  <td>{product.name}</td>
                  <td>{product.origin}</td>
                  <td>{material}</td>
                  <td>
                    <div className="quantity-changer">
                      <ChangeQuantityBtnGroup product={product} />
                      <div className="quantity">{product.quantity}</div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.quantity * product.price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="bold" colSpan="7">
                TOTAL
              </td>
              <td className="bold sum">{sum()}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="msg">
          <span>EMPTY</span>
        </div>
      )}

      <div className="basket-btn-group">
        <button onClick={returnToMainPage} type="button" id="return">
          TO MAIN
        </button>
        <BasketBtnActionForAll />
      </div>
    </div>
  );
};

export default Basket;
