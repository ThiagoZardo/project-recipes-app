import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import FoodRecomended from '../components/FoodRecomended';
import RecipeButton from '../components/RecipeButton';
// mocks de localStorage
// import {
//   favoriteRecipes,
//   inProgressRecipes,
//   doneRecipes,
// } from '../tests/mocks/localStorageMocks';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
// import {
//   checkIfDrinkIsInProgress,
//   checkIfRecipeIsDone,
// } from '../functions/checkLocalStorage';
import { fetchDrinkById, fetchMeals } from '../helpers';
import getSixMeals from '../functions/getSixRecipes';
import { checkIfDrinkIsInProgress, checkIfRecipeIsDone,
  setLocalStorage } from '../functions/checkLocalStorage';

function DetailsDrink(props) {
  const { match } = props;
  const { params } = match;
  // coloca o mock de doneRecipes no localStorage
  // localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  // coloca o mock de inProgressRecipes no localStorage
  // localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

  const [foods, setFoods] = useState([]);
  const [drink, setDrink] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const allFoods = await fetchMeals();
      const sixFoods = getSixMeals(allFoods.meals);
      setFoods(sixFoods);
      const drinkObject = await fetchDrinkById(params.idDrink);
      setDrink(drinkObject.drinks[0]);
      setLocalStorage();
    };
    getFoods();
  }, []);

  useEffect(() => {
    if (Object.values(drink).length) {
      setRecipeIngredients(filterIngredients(drink));
      setRecipeMeasures(filterMeasures(drink));
    }
  }, [drink]);

  setLocalStorage();

  return (
    <main>
      <HeaderDetails
        recipeImage={ drink.strDrinkThumb }
        recipeTitle={ drink.strDrink }
        recipeCategory={ drink.strCategory }
        alcoholic={ drink.strAlcoholic }
      />
      {
        // console.log(checkIfRecipeIsDone(+(params.idDrink)))
      }
      <PrepareMethod
        recipeIngredients={ recipeIngredients }
        recipeMeasures={ recipeMeasures }
        recipeInstructions={ drink.strInstructions }
      />
      {
        foods.map((food) => (
          <FoodRecomended
            key={ food.idMeal }
            recipeImage={ food.strMealThumb }
            recipeTitle={ food.strMeal }
            recipeCategory={ food.strCategory }
          />
        ))
      }
      {
        <RecipeButton
          id={ drink.idDrink }
          type="drink"
          nationality={ drink.strArea }
          category={ drink.strCategory }
          alcoholicOrNot=""
          name={ drink.strDrink }
          image={ drink.strDrinkThumb }
          // favoriteRecipes={ favoriteRecipes }
          // inProgressRecipes={ inProgressRecipes }
          // doneRecipes={ doneRecipes }
          recipeDone={ checkIfRecipeIsDone(drink.idDrink) }
          continueRecipe={ checkIfDrinkIsInProgress(drink.idDrink) }
        />
      }
    </main>
  );
}

DetailsDrink.propTypes = {
  match: PropTypes.node.isRequired,
};

export default DetailsDrink;
