import "./basket.css";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import CTX from "../../Context/localContext";
import basketCountingRepFn from "../../Services/groupedByCount";

const Basket = () => {
  const { basket, setBasket } = useContext(CTX);
  console.log("basket", basket);
  // const basketCountingRep = basketCountingRepFn(basket, "id");
  const basketCountingRep = basket;

  const history = useHistory();
  const returnToMainPage = () => {
    history.push("/");
  };

  const adderFn = (adder, id) => {
    console.log(adder, id);
    let product = basketCountingRep.find((product) => product.id === id);
    if (product.q + adder < 1) {
    } else {
      product.q += adder;
    }
    console.log(product);
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
            {basketCountingRep.map((product, i) => {
              const [, material, type] = product.name.split(" ");

              return (
                <tr key={product.id + i}>
                  <td>{++i}</td>
                  <td>{type}</td>
                  <td>{product.name}</td>
                  <td>{product.origin}</td>
                  <td>{material}</td>
                  <td>
                    <div className="quantityChanger">
                      <div className="adder-button-group">
                        <button
                          onClick={() => adderFn(-1, product.id)}
                          className="adder minus-one">
                          -
                        </button>
                        <button
                          onClick={() => adderFn(+1, product.id)}
                          className="adder plus-one">
                          +
                        </button>
                      </div>
                      <span className="q">{product.q}</span>
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
                {basket.reduce((sum, product) => sum + product.price, 0)}
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
          TO GOODS
        </button>
        <button type="button" disabled id="buy-basket">
          PURCHASE
        </button>
      </div>
    </div>
  );
};

export default Basket;
