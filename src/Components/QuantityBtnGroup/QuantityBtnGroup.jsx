import resycleBinIco from "Assets/img/ico/recycle-bin.svg";
import minus from "Assets/img/ico/minus.svg";
import plus from "Assets/img/ico/plus.svg";
import "Components/QuantityBtnGroup/quantityBtnGroup.css";

const ChangeQuantityBtnGroup = ({
  product,
  deleteProductBasket,
  decrementBasket,
  incrementBasket,
}) => {
  return (
    <>
      {product.quantity !== 0 ? (
        <>
          <div className="replacer-add-to-cart-btn">
            <div className="bg-as-add-to-cart">
              <div className="adder-button-group">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    decrementBasket();
                  }}
                  className="basket-btn-action minus-one">
                  <img src={minus} alt="minus" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    incrementBasket();
                  }}
                  className="basket-btn-action plus-one">
                  <img src={plus} alt="plus" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteProductBasket();
                  }}
                  className="basket-btn-action del-all">
                  <img src={resycleBinIco} alt="bin" />
                </button>
              </div>
            </div>
            <div className="badge">{product.quantity}</div>
          </div>
        </>
      ) : (
        <button
          className="add-to-cart_button"
          onClick={(e) => {
            e.preventDefault();
            incrementBasket(e);
          }}>
          ADD TO CART
        </button>
      )}
    </>
  );
};

export default ChangeQuantityBtnGroup;
