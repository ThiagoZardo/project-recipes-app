import React from 'react';
import '../RecipeButton.css';
/* import { propTypes } from 'react-bootstrap/esm/Image'; */

function RecipeButton(/* props */) {
  /* const { id, favoriteRecipes, inProgressRecipes, doneRecipes } = props; */
  return (

    <button
      type="button"
      data-testid="start-recipe-btn"
      className="startButton"
    >
      Start Recipe
    </button>
  );
}

export default RecipeButton;

/* RecipeButton.propTypes = {
  id: propTypes.shape().isRequired,
  favoriteRecipes: propTypes.shape().isRequired,
  inProgressRecipes: propTypes.shape().isRequired,
  doneRecipes: propTypes.shape().isRequired,
}; */
