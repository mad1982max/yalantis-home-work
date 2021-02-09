import Button from "Components/Button/Button";
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
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  decrementBasket();
                }}
                className="basket-btn-action minus-one"
                image={minus}
              />

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  incrementBasket();
                }}
                className="basket-btn-action plus-one"
                image={plus}
              />

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  deleteProductBasket();
                }}
                className="basket-btn-action del-all"
                image={resycleBinIco}
              />
            </div>
            <div className="badge">{quantity}</div>
          </div>
        </>
      ) : (
        <Button
          className="add-to-cart_button"
          title="ADD TO CART"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            incrementBasket(e);
          }}
        />
      )}
    </>
  );
};

export default ChangeQuantityBtnGroup;
