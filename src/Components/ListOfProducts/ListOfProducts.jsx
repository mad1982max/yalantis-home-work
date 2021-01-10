import { useContext } from "react";
import { useFirstAddTocart } from "Helpers/changeQuantityInCart";
import ProductCard from "Components/ProductCard/ProductCard";
import { basketCTX } from "Context/localContext";
import nameParser from "Helpers/takeNameParts";
import getImageByName from "Helpers/getImage";
import showCurrentProductKeyInBasket from "Helpers/showCurrentProductKeyInBasket";

const ListOfProducts = ({ goods }) => {
  const { basket } = useContext(basketCTX);
  const { adderFirstFn } = useFirstAddTocart();

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
            addToCart={(e) => adderFirstFn(e, product)}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
