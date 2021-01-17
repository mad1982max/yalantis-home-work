import resycleBinIco from "Assets/img/ico/recycle-bin.svg";
import minus from "Assets/img/ico/minus.svg";
import plus from "Assets/img/ico/plus.svg";
import "Components/ChangeQuantityBtnGroup/changeQuantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({ product, addToCart }) => {
  return (
    <div className="adder-button-group">
      <button
        onClick={(e) => addToCart(e, "decrementOne")}
        className="basket-btn-action minus-one">
        <img src={minus} alt="minus" />
      </button>
      <button
        onClick={(e) => addToCart(e, "incrementOne")}
        className="basket-btn-action plus-one">
        <img src={plus} alt="plus" />
      </button>
      <button
        onClick={(e) => addToCart(e, "deleteAll")}
        className="basket-btn-action del-all">
        <img src={resycleBinIco} alt="bin" />
      </button>
    </div>
  );
};

export default ChangeQuantityBtnGroup;
