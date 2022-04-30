import React from 'react';
import PropTypes from 'prop-types';
import '../RecipeButton.css';
import { doneRecipes } from '../tests/mocks/localStorageMocks';

function RecipeButton(props) {
  const { id } = props;

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

RecipeButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RecipeButton;
