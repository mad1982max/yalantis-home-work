const showCurrentProductKeyInBasket = (id, basketArray, keyToShow) => {
  let productInBasket = basketArray.find((item) => item.id === id);
  if (productInBasket) return productInBasket[keyToShow];
  return 0;
};

export default showCurrentProductKeyInBasket;
