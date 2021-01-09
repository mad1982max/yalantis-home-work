import { useContext } from "react";
import ProductCard from "Components/ProductCard/ProductCard";
import { basketCTX } from "Context/localContext";
import nameParser from "Helpers/takeNameParts";
import getImageByName from "Helpers/getImage";
import showCurrentProductKeyInBasket from "Helpers/showCurrentProductKeyInBasket";

const ListOfProducts = ({ goods }) => {
  const { basket, setBasket } = useContext(basketCTX);

  const addToCart = (e, product, adder) => {
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

  return (
    <div className="list-of-goods">
      {goods.map((product) => {
        const { type } = nameParser(product.name);
        const imgSrc = getImageByName(type);
        const quantity = showCurrentProductKeyInBasket(
          product.id,
          basket,
          "quantity"
        );

        return (
          <ProductCard
            key={product.id}
            {...product}
            origin={product.origin}
            imgSrc={imgSrc}
            quantity={quantity}
            addToCart={(e) => addToCart(e, product, 1)}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
