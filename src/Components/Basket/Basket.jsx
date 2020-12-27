import "./basket.css";
import { useContext } from "react";
import CTX from "../../Context/localContext";

const Basket = () => {
  const { basket } = useContext(CTX);
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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product, i) => (
              <tr key={product.id + i}>
                <td>{++i}</td>
                <td>{product.name.split(" ")[2]}</td>
                <td>{product.name}</td>
                <td>{product.origin}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="bold" colSpan="4">
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
    </div>
  );
};

export default Basket;
