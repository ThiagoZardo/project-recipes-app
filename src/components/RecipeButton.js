import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../RecipeButton.css';

function RecipeButton(props) {
  const { id, continueRecipe, type, recipeDone } = props;
  // nationality, category, alcoholicOrNot, name, image } = props;
  const history = useHistory();

  // const storageInProgress = () => {
  //   const objectProgress = {
  //     id,
  //     type,
  //     nationality,
  //     category,
  //     alcoholicOrNot,
  //     name,
  //     image,
  //   };
  //   const getItem = JSON.parse(localStorage.getItem('inProgressRecipes'));
  //   console.log(getItem);

  //   localStorage.setItem('inProgressRecipes',
  //     JSON.stringify([...getItem, objectProgress]));
  // };

  const goToRecipeInProgress = () => {
    if (type === 'food') {
      history.push(`/foods/${id}/in-progress`);
    } else {
      history.push(`/drinks/${id}/in-progress`);
    }
  };

  return (
    <div>
      {
        continueRecipe
          && (
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="startButton"
              onClick={ goToRecipeInProgress }
            >
              Continue Recipe
            </button>
          )
      }
      {
        !recipeDone && (
          <button
            onClick={ goToRecipeInProgress }
            type="button"
            data-testid="start-recipe-btn"
            className="startButton"
          >
            Start Recipe
          </button>
        )

      }

      {/* // <button
    //   type="button"
    //   data-testid="start-recipe-btn"
    //   className="startButton"
    //   onClick={ goToRecipeInProgress }
    // >
    //   {
    //     continueRecipe ? (
    //       'Continue Recipe'
    //     ) : (
    //       'Start Recipe'
    //     )
    //   }
    // </button> */}
    </div>
  );
}

RecipeButton.propTypes = {
  id: PropTypes.node.isRequired,
  continueRecipe: PropTypes.node.isRequired,
  recipeDone: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  // nationality: PropTypes.node.isRequired,
  // category: PropTypes.node.isRequired,
  // alcoholicOrNot: PropTypes.node.isRequired,
  // name: PropTypes.node.isRequired,
  // image: PropTypes.node.isRequired,
};

export default RecipeButton;
