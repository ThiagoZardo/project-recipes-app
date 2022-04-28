export const filterIngredients = (meal) => {
  const mealArray = Object.entries(meal);
  const mealCorrectArray = mealArray.filter((arrayIngredient) => (
    arrayIngredient[0].includes('strIngredient')
    && arrayIngredient[1] !== ''
  ));
  const ingredientsArray = mealCorrectArray.map((ingredient) => (
    ingredient[1]
  ));
  return ingredientsArray;
};

export const filterMeasures = (meal) => {
  const mealArray = Object.entries(meal);
  const mealCorrectArray = mealArray.filter((arrayIngredient) => (
    arrayIngredient[0].includes('strMeasure')
    && arrayIngredient[1] !== ' '
  ));
  const ingredientsArray = mealCorrectArray.map((ingredient) => (
    ingredient[1]
  ));
  return ingredientsArray;
};
