import "./basket.css";
import { useContext } from "react";
import CTX from "../../Context/localContext";
import basketCountingRepFn from "../../Services/groupedByCount";

const Basket = () => {
  const { basket } = useContext(CTX);
  const basketCountingRep = basketCountingRepFn(basket, "id");

  return (
    <div className="basket-page-wrapper">
      <div className="basket-name">Your Basket:</div>
      {basket.length > 0 ? (
        <table className="basket-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Full Name</th>
              <th>Origin</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {basketCountingRep.map((product, i) => (
              <tr key={product.id + i}>
                <td>{++i}</td>
                <td>{product.name.split(" ")[2]}</td>
                <td>{product.name}</td>
                <td>{product.origin}</td>
                <td>{product.q}</td>
                <td>{product.price}</td>
                <td>{product.q * product.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="bold" colSpan="6">
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
      <div className="return-btn">
        <button>Return to main page</button>
      </div>
    </div>
  );
};

export default Basket;
