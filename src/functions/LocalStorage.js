function setLocalStorageInProgress(type, check, itemId) {
  const idCock = type === 'drinks' ? itemId : '';
  const idMeal = type === 'foods' ? itemId : '';
  const ingredientfood = type === 'foods' ? check : [];
  const ingredientdrink = type === 'drinks' ? check : [];
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const inProgressObj = {
    cocktails: {
      ...inProgress.cocktails,
      [idCock]: ingredientdrink,
    },
    meals: {
      ...inProgress.meals,
      [idMeal]: ingredientfood,
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
}

export default setLocalStorageInProgress;
