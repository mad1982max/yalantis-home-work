import resycleBinIco from "Assets/img/ico/recycle-bin.svg";
import minus from "Assets/img/ico/minus.svg";
import plus from "Assets/img/ico/plus.svg";
import "Components/QuantityBtnGroup/quantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({
  quantity,
  deleteProductBasket,
  decrementBasket,
  incrementBasket,
}) => {
  return (
    <>
      {quantity !== 0 ? (
        <>
          <div className="replacer-add-to-cart-btn">
            <div className="adder-button-group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  decrementBasket();
                }}
                className="basket-btn-action minus-one">
                <img src={minus} alt="minus" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  incrementBasket();
                }}
                className="basket-btn-action plus-one">
                <img src={plus} alt="plus" />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  deleteProductBasket();
                }}
                className="basket-btn-action del-all">
                <img src={resycleBinIco} alt="bin" />
              </button>
            </div>
            <div className="badge">{quantity}</div>
          </div>
        </>
      ) : (
        <button
          className="add-to-cart_button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            incrementBasket(e);
          }}>
          ADD TO CART
        </button>
      )}
    </>
  );
};

export default ChangeQuantityBtnGroup;
