const showCurrentProductKeyInBasket = (id, basketArray, keyToShow) => {
  const productInBasket = basketArray.find((item) => item.id === id);
  if (productInBasket) return productInBasket[keyToShow];
  return 0;
};

export default showCurrentProductKeyInBasket;
