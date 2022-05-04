export function checkIfRecipeIsDone(id) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return allDoneRecipes.some((doneRecipe) => (
    Number(doneRecipe.id) === Number(id)
  ));
}

export function checkIfMealIsInProgress(id) {
  const mealsProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { meals } = mealsProgress;
  const idMeals = Object.keys(meals);
  return idMeals.some((inProgressMealId) => (
    Number(inProgressMealId) === Number(id)
  ));
}

export function checkIfDrinkIsInProgress(id) {
  const drinkProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { cocktails } = drinkProgress;
  const allInProgressDrinksIds = Object.keys(cocktails);
  return allInProgressDrinksIds.some((inProgressDrinkId) => (
    Number(inProgressDrinkId) === Number(id)
  ));
}

export function checkIfFavoriteRecipe(id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favoriteRecipes.some((recipes) => (
    Number(recipes.id) === Number(id)
  ));
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
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
}
