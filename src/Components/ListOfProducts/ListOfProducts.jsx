import { useSelector, useDispatch } from "react-redux";
import { basketSelector } from "Helpers/basket/selectors";
import ProductCard from "Components/ProductCard/ProductCard";
import { nameParser } from "Helpers/takeNameParts";
import { getImageByName } from "Helpers/getImage";
import { showCurrentProductKeyInBasket } from "Helpers/showCurrentProductKeyInBasket";
import {
  increment,
  deleteProduct,
  decrement,
} from "Helpers/basket/changeBasketQuantitySlicer";

const ListOfProducts = ({ goods }) => {
  const dispatch = useDispatch();
  const basket = useSelector(basketSelector);

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
        const extendedProduct = { ...product, imgSrc, quantity };

        return (
          <ProductCard
            key={product.id}
            product={extendedProduct}
            incrementBasket={() => dispatch(increment({ product }))}
            decrementBasket={() => dispatch(decrement({ product }))}
            deleteProductBasket={() => dispatch(deleteProduct({ product }))}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
