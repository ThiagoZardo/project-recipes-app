function checkIfRecipeIsDone(id) {
  const allDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return !allDoneRecipes.some((doneRecipe) => (
    doneRecipe.id === id
  ));
}

export default checkIfRecipeIsDone;
