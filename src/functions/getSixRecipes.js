const getSixMeals = (foods) => {
  const limitedNumber = 6;
  const limitedMeals = foods.slice(0, limitedNumber);
  return limitedMeals;
};

export default getSixMeals;
