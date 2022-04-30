import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import DrinkRecomended from '../components/DrinkRecomended';
import RecipeButton from '../components/RecipeButton';
// mocks de localStorage
// import {
//   favoriteRecipes,
//   inProgressRecipes,
//   doneRecipes,
// } from '../tests/mocks/localStorageMocks';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
// import {
//   checkIfMealIsInProgress,
//   checkIfRecipeIsDone,
// } from '../functions/checkLocalStorage';
import { fetchDrinks, fetchFoodById } from '../helpers';
import getSixDrinks from '../functions/getSixDrinks';

function DetailsFood(props) {
  const { match } = props;
  const { params } = match;
  console.log(params.idMeal);
  // coloca o mock de doneRecipes no localStorage
  // localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
  // coloca o mock de inProgressRecipes no localStorage

  const [drinks, setDrinks] = useState([]);
  const [meal, setMeal] = useState({});
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [recipeMeasures, setRecipeMeasures] = useState([]);
  const [videoUrl, setvideoUrl] = useState('');

  useEffect(() => {
    const getDrinks = async () => {
      const allDrinks = await fetchDrinks();
      const sixDrinks = getSixDrinks(allDrinks.drinks);
      setDrinks(sixDrinks);
      const foodObject = await fetchFoodById(params.idMeal);
      console.log(foodObject);
      setMeal(foodObject.meals[0]);
      if (!localStorage.getItem('inProgressRecipes')) {
        localStorage.setItem('inProgressRecipes', JSON.stringify([]));
      }
    };
    getDrinks();
  }, []);

  useEffect(() => {
    if (Object.values(meal).length) {
      setRecipeIngredients(filterIngredients(meal));
      setRecipeMeasures(filterMeasures(meal));
      setvideoUrl(meal.strYoutube.replace('watch?v=', 'embed/'));
    }
  }, [meal]);
  return (
    <main>
      {
        meal !== {} && (
          <>
            <HeaderDetails
              recipeImage={ meal.strMealThumb }
              recipeTitle={ meal.strMeal }
              recipeCategory={ meal.strCategory }
            />
            <PrepareMethod
              recipeIngredients={ recipeIngredients }
              recipeMeasures={ recipeMeasures }
              recipeInstructions={ meal.strInstructions }
              recipeVideo={ videoUrl }
              willShowVideo
            />
          </>
        )
      }
      {
        drinks.map((drinkRecomended) => (
          <DrinkRecomended
            key={ drinkRecomended.idDrink }
            recipeImage={ drinkRecomended.strDrinkThumb }
            recipeAlcoholic={ drinkRecomended.strAlcoholic }
            recipeTitle={ drinkRecomended.strDrink }
          />

        ))
      }
      {
        <RecipeButton
          id={ meal.idMeal }
          type="food"
          nationality={ meal.strArea }
          category={ meal.strCategory }
          alcoholicOrNot=""
          name={ meal.strMeal }
          image={ meal.strMealThumb }
          // favoriteRecipes={ favoriteRecipes }
          // inProgressRecipes={ inProgressRecipes }
          // doneRecipes={ doneRecipes }
          continueRecipe={ false }
        />
      }
    </main>
  );
}

DetailsFood.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailsFood;
