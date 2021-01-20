import { useSelector } from "react-redux";
import ProductCard from "Components/ProductCard/ProductCard";
import { basket } from "Bus/Selectors/selectors";
import { nameParser } from "Bus/Helpers/takeNameParts";
import { getImageByName } from "Bus/Helpers/getImage";
import { showCurrentProductKeyInBasket } from "Bus/Helpers/showCurrentProductKeyInBasket";

const ListOfProducts = ({ goods }) => {
  const goodsInBasket = useSelector(basket);

  return (
    <div className="list-of-goods">
      {goods.map((product) => {
        const { type } = nameParser(product.name);
        const imgSrc = getImageByName(type);
        const quantity = showCurrentProductKeyInBasket(
          product.id,
          goodsInBasket,
          "quantity"
        );
        const extendedProduct = { ...product, imgSrc, quantity };

        return <ProductCard key={product.id} product={extendedProduct} />;
      })}
    </div>
  );
};

export default ListOfProducts;
