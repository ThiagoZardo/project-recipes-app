import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import '../RecipeButton.css';
import { checkIfDrinkIsInProgress,
  checkIfMealIsInProgress, checkIfRecipeIsDone } from '../functions/checkLocalStorage';

function RecipeButton() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const itemId = pathname.split('/')[2];
  const type = pathname.split('/')[1];
  const isDone = checkIfRecipeIsDone(itemId);
  let continueRecipe;

  if (type === 'foods') {
    continueRecipe = checkIfMealIsInProgress(itemId);
  } else {
    continueRecipe = checkIfDrinkIsInProgress(itemId);
  }

  const goToRecipeInProgress = () => {
    if (type === 'foods') {
      history.push(`/foods/${itemId}/in-progress`);
    } else {
      history.push(`/drinks/${itemId}/in-progress`);
    }
  };

  return (
    <div>
      {!isDone
        ? (
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="startButton"
            onClick={ goToRecipeInProgress }
          >

            {continueRecipe ? 'Continue Recipe' : 'Start Recipe'}
          </button>)
        : null}
    </div>
  );
}

export default RecipeButton;
