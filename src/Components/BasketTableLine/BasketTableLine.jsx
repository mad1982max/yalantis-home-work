import QuantityBtnGroupContainer from "Containers/QuantityBtnGroupContainer/QuantityBtnGroupContainer";

const BasketTableLine = ({
  product,
  counter,
  goToProduct,
  totalSumByProduct,
}) => (
  <tr onClick={() => goToProduct(product.id)}>
    <td>{counter}</td>
    <td>{product.type}</td>
    <td>{product.name}</td>
    <td>{product.origin}</td>
    <td>{product.material}</td>
    <td>
      <div className="quantity-changer">
        <QuantityBtnGroupContainer product={product} />
      </div>
    </td>
    <td>{product.price}</td>
    <td>{totalSumByProduct}</td>
  </tr>
);

export default BasketTableLine;
