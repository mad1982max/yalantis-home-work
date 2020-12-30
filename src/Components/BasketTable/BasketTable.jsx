import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./basketTable.css";
import ChangeQuantityBtnGroup from "../ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";
import { basketCTX } from "../../Context/localContext";

const BasketTable = () => {
  const { basket } = useContext(basketCTX);
  const history = useHistory();

  const sum = () =>
    basket.reduce((sum, product) => sum + product.price * product.quantity, 0);

  const amount = () =>
    basket.reduce((sum, product) => sum + product.quantity, 0);

  const goToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <>
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
              <th>Price, $</th>
              <th>TOTAL, $</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((product, i) => {
              const [, material, type] = product.name.split(" ");

              return (
                <tr
                  key={product.id + i}
                  onClick={() => goToProduct(product.id)}>
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
              <td className="bold" colSpan="5">
                TOTAL
              </td>
              <td className="bold total">
                <div className="quantity">{amount()}</div>
              </td>
              <td className="bold empty"></td>
              <td className="bold sum">{sum()}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className="msg">
          <span>EMPTY</span>
        </div>
      )}
    </>
  );
};

export default BasketTable;
