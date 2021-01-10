import ChangeQuantityBtnGroup from "Components/ChangeQuantityBtnGroup/ChangeQuantityBtnGroup";

const BasketTableLine = (props) => (
  <tr onClick={() => props.goToProduct(props.id)}>
    <td>{props.counter}</td>
    <td>{props.type}</td>
    <td>{props.name}</td>
    <td>{props.origin}</td>
    <td>{props.material}</td>
    <td>
      <div className="quantity-changer">
        <ChangeQuantityBtnGroup id={props.id} />
        <div className="quantity">{props.quantity}</div>
      </div>
    </td>
    <td>{props.price}</td>
    <td>{props.totalSumByProduct}</td>
  </tr>
);

export default BasketTableLine;
