import { useContext } from "react";
import ProductCard from "Components/ProductCard/ProductCard";
import { basketCTX } from "Context/localContext";
import defineDate from "Helpers/defineDate";
import nameParser from "Helpers/takeNameParts";
import getImageByName from "Helpers/getImage";
import showCurrentProductKeyInBasket from "Helpers/showCurrentProductKeyInBasket";
import "Components/ExtendedProductCard/extendedProductCard.css";

const ExtendedProductCardFn = (Card) => {
  const ExtendedComp = ({ product }) => {
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
          product.quantity = 1;

          return [...prevBasket, product];
        }
      });
    };

    const origin = nameParser(product.name).origin.toUpperCase();
    const type = nameParser(product.name).type;
    const imgSrc = getImageByName(type);
    const quantity = showCurrentProductKeyInBasket(
      product.id,
      basket,
      "quantity"
    );

    console.log(product);
    return (
      <>
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          origin={origin}
          imgSrc={imgSrc}
          id={product.id}
          quantity={quantity}
          addToCart={(e) => addToCart(product.id, e)}
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
