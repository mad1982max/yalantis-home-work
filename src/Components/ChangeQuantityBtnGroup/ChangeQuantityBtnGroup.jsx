import { useContext } from "react";
import { basketCTX } from "Context/localContext";
import resycleBinIco from "Helpers/img/recycle-bin.svg";
import minus from "Helpers/img/minus.svg";
import plus from "Helpers/img/plus.svg";
import "Components/ChangeQuantityBtnGroup/changeQuantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({ product }) => {
  const { basket, setBasket } = useContext(basketCTX);

  const adderFn = (adder, id, e) => {
    e.preventDefault();
    e.stopPropagation();
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
  };

  const dellProduct = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setBasket((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="adder-button-group">
      <button
        onClick={(e) => adderFn(-1, product.id, e)}
        className="basket-btn-action minus-one">
        <img src={minus} alt="minus" />
      </button>
      <button
        onClick={(e) => adderFn(+1, product.id, e)}
        className="basket-btn-action plus-one">
        <img src={plus} alt="plus" />
      </button>
      <button
        onClick={(e) => dellProduct(product.id, e)}
        className="basket-btn-action del-all">
        <img src={resycleBinIco} alt="bin" />
      </button>
    </div>
  );
};

export default ChangeQuantityBtnGroup;
