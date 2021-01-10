import { useContext } from "react";
import basketCTX from "Helpers/basket/context";

const useActionForAllBasket = () => {
  const { basket, setBasket } = useContext(basketCTX);

  const buyAll = () => {
    console.log(
      "goods in basket:",
      basket.map((item) => item.id)
    );
    console.log("not implemented yet");
  };

  const deleteAll = () => {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) setBasket([]);
  };
  return { buyAll, deleteAll };
};

export default useActionForAllBasket;
