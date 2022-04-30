import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../RecipeButton.css';

function RecipeButton(props) {
  const { id, continueRecipe, type } = props;
  const history = useHistory();

  const goToRecipeInProgress = () => {
    if (type === 'meal') {
      history.push(`/foods/${id}/in-progress`);
    } else {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <button
      type="button"
      data-testid="start-recipe-btn"
      className="startButton"
      onClick={ goToRecipeInProgress }
    >
      {
        continueRecipe ? (
          <span>Continue Recipe</span>
        ) : (
          <span>Start Recipe</span>
        )
      }
    </button>
  );
}

RecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
  continueRecipe: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeButton;
