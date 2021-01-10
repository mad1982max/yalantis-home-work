import { useChangeQuantityFn } from "Helpers/changeQuantityInCart";
import resycleBinIco from "Helpers/img/ico/recycle-bin.svg";
import minus from "Helpers/img/ico/minus.svg";
import plus from "Helpers/img/ico/plus.svg";
import "Components/ChangeQuantityBtnGroup/changeQuantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({ id }) => {
  const { adderFn } = useChangeQuantityFn();

  return (
    <div className="adder-button-group">
      <button
        onClick={(e) => adderFn(e, id, -1)}
        className="basket-btn-action minus-one">
        <img src={minus} alt="minus" />
      </button>
      <button
        onClick={(e) => adderFn(e, id, 1)}
        className="basket-btn-action plus-one">
        <img src={plus} alt="plus" />
      </button>
      <button
        onClick={(e) => adderFn(e, id, 0)}
        className="basket-btn-action del-all">
        <img src={resycleBinIco} alt="bin" />
      </button>
    </div>
  );
};

export default ChangeQuantityBtnGroup;
