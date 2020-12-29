import { useContext } from "react";
import { basketCTX } from "../../Context/localContext";
import { Link } from "react-router-dom";
import "./productCard.css";
import getImageByName from "../../Services/getImage";

const ProductCard = (props) => {
  const { name, price, origin, id } = props.product;
  const { basket, setBasket } = useContext(basketCTX);

  const clearNameOfProduct = name.split(" ")[2].toLowerCase();
  let currentImage = getImageByName(clearNameOfProduct);

  const addToCart = (e) => {
    e.preventDefault();
    setBasket((prevBasket) => {
      let id = props.product.id;
      let productInBasket = prevBasket.find((item) => item.id === id);
      if (productInBasket) {
        let quantity = productInBasket.quantity + 1;
        return [
          ...prevBasket.map((product) =>
            product.id === id ? { ...product, quantity } : product
          ),
        ];
      } else {
        props.product.quantity = 1;
        return [...prevBasket, props.product];
      }
    });
  };

  const countQuantity = (id) => {
    let productInBasket = basket.find((item) => item.id === id);
    if (productInBasket) return productInBasket.quantity;
    return 0;
  };

  //how to use?
  // const countQuantity = useCallback(
  //   (id) => {
  //     let productInBasket = basket.find((item) => item.id === id);
  //     if (productInBasket) return productInBasket.quantity;
  //     return 0;
  //   },
  //   [basket]
  // );

  return (
    <div className="product-shadow-box">
      <Link to={`/product/${id}`}>
        <div className="product-wrapper">
          <div className="product-img">
            <img src={currentImage} alt="dummy img" />
          </div>
          <div className="product-name">{name}</div>
          <div className="product-origin">{origin.toUpperCase()}</div>
          <div className="basket-wrapper-card">
            <div className="product-price">$ {price}</div>
            <div className="basket-group">
              {countQuantity(id) !== 0 ? (
                <div className="badge">{countQuantity(id)}</div>
              ) : (
                ""
              )}
              <button className="add-to-cart_button" onClick={addToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
