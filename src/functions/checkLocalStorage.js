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
  const removeId = idMeals.filter((el) => el !== '');
  console.log(removeId);
  return removeId.some((inProgressMealId) => (
    Number(inProgressMealId) === Number(id)
  ));
}

export function checkIfDrinkIsInProgress(id) {
  const drinkProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const { cocktails } = drinkProgress;
  const allInProgressDrinksIds = Object.keys(cocktails);
  const removeId = allInProgressDrinksIds.filter((el) => el !== '');
  return removeId.some((inProgressDrinkId) => (
    Number(inProgressDrinkId) === Number(id)
  ));
}

export function checkIfIInProgressRecipe(type, id) {
  const Storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const getItem = type === 'drinks' ? Storage.cocktails : Storage.meals;
  if (type === 'foods' && checkIfMealIsInProgress(id)) {
    const keyMeal = Object.keys(getItem).filter((key) => key === id);
    return [...getItem[keyMeal[0]]];
  }
  if (type === 'drinks' && checkIfDrinkIsInProgress(id)) {
    const keyDrink = Object.keys(getItem).filter((key) => key === id);
    return [...getItem[keyDrink[0]]];
  }
}

export function checkIfFavoriteRecipe(id) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favoriteRecipes.some((recipes) => (
    Number(recipes.id) === Number(id)
  ));
}

export function setLocalStorage() {
  if (!localStorage.getItem('inProgressRecipes')) {
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {
        21880: [],
      },
      meals: {
        5660: [],
      },
    }));
  }
  if (!localStorage.getItem('doneRecipes')) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
  if (!localStorage.getItem('favoriteRecipes')) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([]));
  }
}
