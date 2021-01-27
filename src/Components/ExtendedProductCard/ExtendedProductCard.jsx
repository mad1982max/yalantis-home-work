import { useSelector } from "react-redux";
import ProductCard from "Components/ProductCard/ProductCard";
import { defineDate } from "Bus/Helpers/defineDate";
import { nameParser } from "Bus/Helpers/takeNameParts";
import { getImageByName } from "Bus/Helpers/getImage";
import { showCurrentProductKeyInBasket } from "Bus/Helpers/showCurrentProductKeyInBasket";
import { basket } from "Bus/Selectors/basketSelector";
import "Components/ExtendedProductCard/extendedProductCard.css";

const ExtendedProductCardFn = (Card) => {
  const ExtendedComp = ({ product }) => {
    const goodsInBasket = useSelector(basket);
    const { type } = nameParser(product.name);
    const imgSrc = getImageByName(type);
    const quantity = showCurrentProductKeyInBasket(
      product.id,
      goodsInBasket,
      "quantity"
    );
    const extendedProduct = { ...product, imgSrc, quantity };
    const createdDate = defineDate(product.createdAt);
    const updatedDate = defineDate(product.updatedAt);

    return (
      <>
        <Card product={extendedProduct} />
        <div className="additional-info">
          <div className="idWrapper-group">
            <div className="bold">ID:</div>
            <div className="id-value">{product.id}</div>
          </div>

          <div className="date-wrapper">
            <div className="dateWrapper-group">
              <div className="bold">CREATED:</div>
              <div className="created">{createdDate}</div>
            </div>

            <div className="dateWrapper-group">
              <div className="bold">LAST UPDATE:</div>
              <div className="updated">{updatedDate}</div>
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
