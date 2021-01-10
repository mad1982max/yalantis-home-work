const basketTotal = {
  sum: (basket) =>
    basket.reduce((sum, product) => sum + product.price * product.quantity, 0),
  quantity: (basket) =>
    basket.reduce((sum, product) => sum + product.quantity, 0),
};

export default basketTotal;
