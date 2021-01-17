import { useContext } from "react";
import { basketCTX } from "Helpers/basket/context";
import { question } from "Constants/config";

const useActionForAllBasket = () => {
  const { setBasket } = useContext(basketCTX);

  const buyAll = () => {
    console.log("--Buying are Not implemented yet--");
  };

  const deleteAll = () => {
    const isConfirmed = window.confirm(question);
    if (isConfirmed) setBasket([]);
  };
  return { buyAll, deleteAll };
};

export { useActionForAllBasket };
