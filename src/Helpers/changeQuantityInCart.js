import { useContext } from "react";
import { basketCTX } from "Context/localContext";

const useFirstAddTocart = () => {
  const { setBasket } = useContext(basketCTX);

  const adderFirstFn = (e, product) => {
    e.preventDefault();

    setBasket((prevBasket) => {
      let productInBasket = prevBasket.find((item) => item.id === product.id);
      if (productInBasket) {
        let quantity = productInBasket.quantity + 1;
        return [
          ...prevBasket.map((item) =>
            item.id === product.id ? { ...item, quantity } : product
          ),
        ];
      } else {
        product.quantity = 1;

        return [...prevBasket, product];
      }
    });
  };
  return { adderFirstFn };
};

const useChangeQuantityFn = () => {
  const { basket, setBasket } = useContext(basketCTX);

  const adderFn = (e, id, adder) => {
    e.preventDefault();
    e.stopPropagation();

    if (adder === 0) {
      setBasket((prev) => prev.filter((product) => product.id !== id));
    } else {
      const productInBasket = basket.find((product) => product.id === id);
      const newQuantity = productInBasket.quantity + adder;
      if (newQuantity >= 1) {
        setBasket((prev) => {
          return [
            ...prev.map((product) =>
              product.id === id
                ? { ...product, quantity: newQuantity }
                : product
            ),
          ];
        });
      }
    }
  };

  return { adderFn };
};

export { useChangeQuantityFn, useFirstAddTocart };
