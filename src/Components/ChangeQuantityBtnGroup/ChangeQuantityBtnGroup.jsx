import { useContext } from "react";
import { basketCTX } from "Context/localContext";
import resycleBinIco from "Helpers/img/ico/recycle-bin.svg";
import minus from "Helpers/img/ico/minus.svg";
import plus from "Helpers/img/ico/plus.svg";
import "Components/ChangeQuantityBtnGroup/changeQuantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({ id }) => {
  const { basket, setBasket } = useContext(basketCTX);

  const adderFn = (e, id, adder) => {
    e.preventDefault();
    e.stopPropagation();

    if (adder === 0) {
      setBasket((prev) => prev.filter((product) => product.id !== id));
    } else {
      let productInBasket = basket.find((product) => product.id === id);
      if (productInBasket.quantity + adder >= 1) {
        setBasket((prev) => {
          let quantity = productInBasket.quantity + adder;
          return [
            ...prev.map((product) =>
              product.id === id ? { ...product, quantity } : product
            ),
          ];
        });
      }
    }
  };

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
