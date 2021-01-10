import { useContext } from "react";
import BasketTableLine from "Components/BasketTableLine/BasketTableLine";
import { basketCTX } from "Context/localContext";
import nameParser from "Helpers/takeNameParts";
import basketTotal from "Helpers/findBasketTotals";
import "Components/BasketTable/basketTable.css";

const BasketTable = ({ goToProduct }) => {
  const { basket } = useContext(basketCTX);

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
              const { material, type } = nameParser(product.name);

              return (
                <BasketTableLine
                  key={product.id}
                  {...product}
                  material={material}
                  type={type}
                  counter={i + 1}
                  goToProduct={goToProduct}
                  totalSumByProduct={basketTotal.lineSum(product)}
                />
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="bold" colSpan="5">
                TOTAL
              </td>
              <td className="bold total">
                <div className="quantity">{basketTotal.quantity(basket)}</div>
              </td>
              <td className="bold empty"></td>
              <td className="bold sum">{basketTotal.sum(basket)}</td>
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
