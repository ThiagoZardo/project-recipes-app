const getSixDrinks = (drinks) => {
  const limitedNumber = 6;
  console.log(drinks);
  const limitedDrinks = drinks.slice(0, limitedNumber);
  console.log(limitedDrinks);
  return limitedDrinks;
};

export default getSixDrinks;
