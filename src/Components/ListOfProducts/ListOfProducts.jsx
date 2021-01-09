import { useContext } from "react";
import ProductCard from "Components/ProductCard/ProductCard";
import { basketCTX } from "Context/localContext";
import nameParser from "Helpers/takeNameParts";
import getImageByName from "Helpers/getImage";
import showCurrentProductKeyInBasket from "Helpers/showCurrentProductKeyInBasket";

const ListOfProducts = ({ goods }) => {
  const { basket, setBasket } = useContext(basketCTX);

  const addToCart = (id, e) => {
    e.preventDefault();

    setBasket((prevBasket) => {
      let productInBasket = prevBasket.find((item) => item.id === id);
      if (productInBasket) {
        let quantity = productInBasket.quantity + 1;
        return [
          ...prevBasket.map((product) =>
            product.id === id ? { ...product, quantity } : product
          ),
        ];
      } else {
        const currentProduct = goods.find((product) => product.id === id);
        currentProduct.quantity = 1;

        return [...prevBasket, currentProduct];
      }
    });
  };

  return (
    <div className="list-of-goods">
      {goods.map(({ id, name, price }) => {
        const origin = nameParser(name).origin.toUpperCase();
        const type = nameParser(name).type;
        const imgSrc = getImageByName(type);
        const quantity = showCurrentProductKeyInBasket(id, basket, "quantity");

        return (
          <ProductCard
            key={id}
            name={name}
            price={price}
            origin={origin}
            imgSrc={imgSrc}
            id={id}
            quantity={quantity}
            addToCart={(e) => addToCart(id, e)}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
