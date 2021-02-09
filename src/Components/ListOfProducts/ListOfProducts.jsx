import { useSelector } from "react-redux";
import ProductCard from "Components/ProductCard/ProductCard";
import { basket } from "Bus/Selectors/basketSelector";
import { nameParser } from "Bus/Helpers/takeNameParts";
import { getImageByName } from "Bus/Helpers/getImage";
import { showCurrentProductKeyInBasket } from "Bus/Helpers/showCurrentProductKeyInBasket";
import { QUANT_KEY } from "Constants/constants";
import "Components/ListOfProducts/listOfProducts.css";

const ListOfProducts = ({ goods, linkEnable, handleClick }) => {
  const goodsInBasket = useSelector(basket);

  return (
    <div className="list-of-goods">
      {goods.map((product) => {
        const { type } = nameParser(product.name);
        const imgSrc = getImageByName(type);
        const quantity = showCurrentProductKeyInBasket(
          product.id,
          goodsInBasket,
          QUANT_KEY
        );
        const extendedProduct = { ...product, imgSrc, quantity };

        return (
          <ProductCard
            key={product.id}
            product={extendedProduct}
            linkEnable={linkEnable}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
