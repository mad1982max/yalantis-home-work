import { useState } from "react";
import basketCTX from "Helpers/basket/context";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  return (
    <basketCTX.Provider value={{ basket, setBasket }}>
      {children}
    </basketCTX.Provider>
  );
};

export default BasketProvider;
