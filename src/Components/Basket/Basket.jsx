import "./basket.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CTX from "../../Context/localContext";
const resycleBinIco = require("../../Shares/img/recycle-bin.svg");
const minus = require("../../Shares/img/minus.svg");
const plus = require("../../Shares/img/plus.svg");

const Basket = () => {
  const { basket, setBasket } = useContext(CTX);

  const history = useHistory();
  const returnToMainPage = () => {
    history.push("/");
  };

  const adderFn = (adder, id) => {
    let productInBasket = basket.find((product) => product.id === id);
    if (productInBasket.q + adder < 1) {
    } else {
      setBasket((prev) => {
        let q = productInBasket.q + adder;
        return [
          ...prev.map((product) =>
            product.id === id ? { ...product, q } : product
          ),
        ];
      });
    }
  };

  const dellProduct = (id) =>
    setBasket((prev) => prev.filter((product) => product.id !== id));

  const deletebasket = () => {
    let isConfirmed = window.confirm("Are you shure?");
    if (isConfirmed) setBasket([]);
  };

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
                      <div className="adder-button-group">
                        <button
                          onClick={() => adderFn(-1, product.id)}
                          className="basket-btn-action minus-one">
                          <img src={minus.default} alt="minus" />
                        </button>
                        <button
                          onClick={() => adderFn(+1, product.id)}
                          className="basket-btn-action plus-one">
                          <img src={plus.default} alt="plus" />
                        </button>
                        <button
                          onClick={() => dellProduct(product.id)}
                          className="basket-btn-action del-all">
                          <img src={resycleBinIco.default} alt="bin" />
                        </button>
                      </div>
                      <div className="q">{product.q}</div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.q * product.price}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="bold" colSpan="7">
                TOTAL
              </td>
              <td className="bold sum">
                {basket.reduce(
                  (sum, product) => sum + product.price * product.q,
                  0
                )}
              </td>
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
          TO NAIN
        </button>
        <button onClick={deletebasket} type="button" id="delbasket">
          DELETE ALL
        </button>
        <button type="button" disabled id="buy-basket">
          BUY ALL
        </button>
      </div>
    </div>
  );
};

export default Basket;
