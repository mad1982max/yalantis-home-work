const nextPrevBtnAvaliable = (current, perPage, total) => {
  const isNext = total - current * perPage > 0;
  const isPrev = current !== 1;
  return { isNext, isPrev };
};

export { nextPrevBtnAvaliable };
