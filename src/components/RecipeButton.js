import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../RecipeButton.css';

function RecipeButton(props) {
  const { id, continueRecipe, type, nationality, category, alcoholicOrNot, name, image } = props;
  const history = useHistory();

  const goToRecipeInProgress = () => {
    const objectProgress = {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot,
      name,
      image,
    };

    if (type !== 'meal') {
      history.push(`/foods/${id}/in-progress`);
    } else {
      history.push(`/drinks/${id}/in-progress`);
    }

    const getItem = JSON.parse(localStorage.getItem('inProgressRecipes'));

    localStorage.setItem('inProgressRecipes', JSON.stringify([...getItem, objectProgress]));
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
          <span data-testid="start-recipe-btn">Start Recipe</span>
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
