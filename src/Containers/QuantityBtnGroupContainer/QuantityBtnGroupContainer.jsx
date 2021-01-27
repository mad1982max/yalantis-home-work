import { useDispatch } from "react-redux";
import QuantityBtnGroup from "Components/QuantityBtnGroup/QuantityBtnGroup";
import { increment, deleteProduct, decrement } from "Bus/Slicers/basketSlicer";

const QuantityBtnGroupContainer = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <QuantityBtnGroup
      quantity={product.quantity}
      incrementBasket={() => dispatch(increment({ product }))}
      decrementBasket={() => dispatch(decrement({ product }))}
      deleteProductBasket={() => dispatch(deleteProduct({ product }))}
    />
  );
};

export default QuantityBtnGroupContainer;
