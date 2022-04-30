const getSixDrinks = (drinks) => {
  const limitedNumber = 6;
  const limitedDrinks = drinks.slice(0, limitedNumber);
  return limitedDrinks;
};

export default getSixDrinks;
