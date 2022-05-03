export function checkIfRecipeIsDone(id) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(allDoneRecipes);
  const teste = allDoneRecipes.some((doneRecipe) => (
    Number(doneRecipe.id) !== Number(id)
  ));
  return teste;
}

export function checkIfMealIsInProgress(id) {
  const mealsProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { meals } = mealsProgress;
  const idMeals = Object.keys(meals);
  const mealId = idMeals.some((inProgressMealId) => (
    Number(inProgressMealId) === Number(id)
  ));
  return mealId;
}

export function checkIfDrinkIsInProgress(id) {
  const drinkProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { cocktails } = drinkProgress;
  const allInProgressDrinksIds = Object.keys(cocktails);
  console.log(allInProgressDrinksIds);
  const drinksId = allInProgressDrinksIds.some((inProgressDrinkId) => (
    Number(inProgressDrinkId) === Number(id)
  ));
  return drinksId;
}

export function checkIfFavoriteRecipe(id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const favorite = favoriteRecipes.some((recipes) => (
    Number(recipes.id) === Number(id)
  ));
  console.log(favorite);
  return favorite;
}

export function setLocalStorage() {
  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        cocktails: {
          15997: [],
        },
        meals: {
          53060: [],
        },
      },
    ));
  }
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([{
      id: '53060',
    }]));
  }
}
