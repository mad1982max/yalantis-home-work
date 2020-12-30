import "./changeQuantityBtnGroup.css";
import { useContext } from "react";
import { basketCTX } from "../../Context/localContext";
const resycleBinIco = require("../../Shares/img/recycle-bin.svg");
const minus = require("../../Shares/img/minus.svg");
const plus = require("../../Shares/img/plus.svg");

const ChangeQuantityBtnGroup = ({ product }) => {
  const { basket, setBasket } = useContext(basketCTX);

  const adderFn = (adder, id, e) => {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    let productInBasket = basket.find((product) => product.id === id);
    if (productInBasket.quantity + adder < 1) {
    } else {
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
        <img src={minus.default} alt="minus" />
      </button>
      <button
        onClick={(e) => adderFn(+1, product.id, e)}
        className="basket-btn-action plus-one">
        <img src={plus.default} alt="plus" />
      </button>
      <button
        onClick={(e) => dellProduct(product.id, e)}
        className="basket-btn-action del-all">
        <img src={resycleBinIco.default} alt="bin" />
      </button>
    </div>
  );
};

export default ChangeQuantityBtnGroup;
