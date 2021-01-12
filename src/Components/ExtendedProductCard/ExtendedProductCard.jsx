import { useContext } from "react";
import { useFirstAddTocart } from "Helpers/changeQuantityInCart";
import ProductCard from "Components/ProductCard/ProductCard";
import basketCTX from "Helpers/basket/context";
import defineDate from "Helpers/defineDate";
import nameParser from "Helpers/takeNameParts";
import getImageByName from "Helpers/getImage";
import showCurrentProductKeyInBasket from "Helpers/showCurrentProductKeyInBasket";
import "Components/ExtendedProductCard/extendedProductCard.css";

const ExtendedProductCardFn = (Card) => {
  const ExtendedComp = ({ product }) => {
    const { basket } = useContext(basketCTX);
    const { adderFirstFn } = useFirstAddTocart();
    const { type } = nameParser(product.name);
    const imgSrc = getImageByName(type);
    const quantity = showCurrentProductKeyInBasket(
      product.id,
      basket,
      "quantity"
    );

    return (
      <>
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          origin={product.origin}
          imgSrc={imgSrc}
          id={product.id}
          quantity={quantity}
          addToCart={(e) => adderFirstFn(e, product)}
        />
        <div className="additional-info">
          <div className="idWrapper-group">
            <div className="bold">ID:</div>
            <div className="id-value">{product.id}</div>
          </div>

          <div className="date-wrapper">
            <div className="dateWrapper-group">
              <div className="bold">CREATED:</div>
              <div className="created">{defineDate(product.createdAt)}</div>
            </div>

            <div className="dateWrapper-group">
              <div className="bold">LAST UPDATE:</div>
              <div className="updated">{defineDate(product.updatedAt)}</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return ExtendedComp;
};

const ExtendedProductCard = ExtendedProductCardFn(ProductCard);

export default ExtendedProductCard;
