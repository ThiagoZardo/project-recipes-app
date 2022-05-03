import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../RecipeButton.css';
import { useSelector } from 'react-redux';
import { checkIfDrinkIsInProgress,
  checkIfMealIsInProgress, checkIfRecipeIsDone } from '../functions/checkLocalStorage';

function RecipeButton() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  const history = useHistory();
  const [isRecipeDone, setIsDone] = useState(true);
  // const [isContinueRecipe, setIsRecipe] = useState(false);
  const { idDrink } = detailDrink;
  const id = !idDrink ? detailFood.idMeal : detailDrink.idDrink;
  const type = !idDrink ? 'food' : 'drink';
  const continueRecipe = type === 'food'
    ? checkIfMealIsInProgress(id) : checkIfDrinkIsInProgress(id);
  console.log(continueRecipe);

  useEffect(() => {
    setIsDone(checkIfRecipeIsDone(id));
  }, [isRecipeDone]);

  // useEffect(() => {
  //   setIsRecipe(continueRecipe);
  //   setIsDone(false);
  // }, []);

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
        !isRecipeDone && (
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
    </div>
  );
}

export default RecipeButton;
