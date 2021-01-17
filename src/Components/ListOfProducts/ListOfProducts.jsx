import { useSelector, useDispatch } from "react-redux";
import { basketSelector } from "Helpers/basket/selectors";
import ProductCard from "Components/ProductCard/ProductCard";
import { nameParser } from "Helpers/takeNameParts";
import { getImageByName } from "Helpers/getImage";
import { showCurrentProductKeyInBasket } from "Helpers/showCurrentProductKeyInBasket";
import { changeBasketQuantity } from "Helpers/basket/changeBasketQuantitySlicer";

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
            addToCart={(e, description) => {
              e.preventDefault();
              dispatch(changeBasketQuantity({ product, description }));
            }}
          />
        );
      })}
    </div>
  );
};

export default ListOfProducts;
