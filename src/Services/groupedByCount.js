// const basketCountingRepFn = (objArr, key) => {
//   let arr = objArr.reduce((accum, product) => {
//     let itemInArr = accum.find((item) => item[key] === product[key]);
//     if (itemInArr) {
//       itemInArr.q++;
//     } else {
//       product.q = 1;
//       accum.push(product);
//     }
//     return accum;
//   }, []);

//   return arr;
// };

// export default basketCountingRepFn;

const basketCountingRepFn = (objArr, key) => {
  let arr = objArr.reduce((accum, product) => {
    let itemInArr = accum.find((item) => item[key] === product[key]);
    if (itemInArr) {
      itemInArr.q++;
    } else {
      product.q = 1;
      accum.push(product);
    }
    return accum;
  }, []);

  return arr;
};

export default basketCountingRepFn;
