import { useSelector } from "react-redux";
import BasketTableLine from "Components/BasketTableLine/BasketTableLine";
import { nameParser } from "Bus/Helpers/takeNameParts";
import { basketTotal } from "Bus/Helpers/findBasketTotals";
import {
  basket,
  totalSumBasketSelector,
  totalQuantityBasketSelector,
} from "Bus/Selectors/basketSelector";
import "Components/BasketTable/basketTable.css";

const BasketTable = ({ goToProduct }) => {
  const goodsInBasket = useSelector(basket);
  const totalSum = useSelector(totalSumBasketSelector);
  const totalQuantity = useSelector(totalQuantityBasketSelector);

  return (
    <>
      {goodsInBasket.length > 0 ? (
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
            {goodsInBasket.map((product, i) => {
              const { material, type } = nameParser(product.name);
              const totalSumByProduct = basketTotal.lineSum(product);
              const extendedproduct = { ...product, material, type };

              return (
                <BasketTableLine
                  key={product.id}
                  product={extendedproduct}
                  counter={i + 1}
                  goToProduct={goToProduct}
                  totalSumByProduct={totalSumByProduct}
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
                <div className="quantity">{totalQuantity}</div>
              </td>
              <td className="bold empty"></td>
              <td className="bold total">
                <div className="quantity">{totalSum}</div>
              </td>
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
