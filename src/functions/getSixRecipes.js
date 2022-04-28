const getSixMeals = (foods) => {
  const limitedNumber = 6;
  console.log(foods);
  const limitedMeals = foods.slice(0, limitedNumber);
  console.log(limitedMeals);
  return limitedMeals;
};

export default getSixMeals;
