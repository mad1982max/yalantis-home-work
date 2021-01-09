// import { useContext } from "react";
// import { basketCTX } from "Context/localContext";

// const changeQuantityInCart = (e, product, adder) => {
//   const { basket, setBasket } = useContext(basketCTX);
//   e.preventDefault();

//   setBasket((prevBasket) => {
//     let productInBasket = prevBasket.find((item) => item.id === product.id);
//     if (productInBasket) {
//       let quantity = productInBasket.quantity + 1;
//       return [
//         ...prevBasket.map((item) =>
//           item.id === product.id ? { ...item, quantity } : product
//         ),
//       ];
//     } else {
//       product.quantity = 1;

//       return [...prevBasket, product];
//     }
//   });
// };

// const adderFn = (e, id, adder) => {
//   e.preventDefault();
//   e.stopPropagation();

//   if (adder === 0) {
//     setBasket((prev) => prev.filter((product) => product.id !== id));
//   } else {
//     let productInBasket = basket.find((product) => product.id === id);
//     if (productInBasket.quantity + adder >= 1) {
//       setBasket((prev) => {
//         let quantity = productInBasket.quantity + adder;
//         return [
//           ...prev.map((product) =>
//             product.id === id ? { ...product, quantity } : product
//           ),
//         ];
//       });
//     }
//   }
// };

// export { changeQuantityInCart, adderFn };
console.log("**");
