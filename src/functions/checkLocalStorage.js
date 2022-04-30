// export function checkIfRecipeIsDone(id) {
//   const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
//   return !allDoneRecipes.some((doneRecipe) => (
//     doneRecipe.id === id
//   ));
// }

// export function checkIfMealIsInProgress(id) {
//   const allinProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
//   const allinProgressRecipesArray = Object.values(allinProgressRecipes);
//   const allInProgressMealsIds = Object.keys(allinProgressRecipesArray[1]);
//   return allInProgressMealsIds.some((inProgressMealId) => (
//     inProgressMealId === id
//   ));
// }

// export function checkIfDrinkIsInProgress(id) {
//   const allinProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
//   const allinProgressRecipesArray = Object.values(allinProgressRecipes);
//   const allInProgressDrinksIds = Object.keys(allinProgressRecipesArray[0]);
//   return allInProgressDrinksIds.some((inProgressDrinkId) => (
//     inProgressDrinkId === id
//   ));
// }
