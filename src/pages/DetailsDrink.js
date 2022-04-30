import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import FoodRecomended from '../components/FoodRecomended';
import RecipeButton from '../components/RecipeButton';
import {
  favoriteRecipes,
  inProgressRecipes,
  doneRecipes,
} from '../tests/mocks/localStorageMocks';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
import checkIfRecipeIsDone from '../functions/checkLocalStorage';
import { fetchDrinkById, fetchMeals } from '../helpers';
import getSixMeals from '../functions/getSixRecipes';

function DetailsDrink(props) {
  const { match } = props;
  const { params } = match;
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

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
    };
    getFoods();
  }, [params]);

  useEffect(() => {
    if (Object.values(drink).length) {
      setRecipeIngredients(filterIngredients(drink));
      setRecipeMeasures(filterMeasures(drink));
    }
  }, [drink]);

  return (
    <main>
      <HeaderDetails
        recipeImage={ drink.strDrinkThumb }
        recipeTitle={ drink.strDrink }
        recipeCategory={ drink.strCategory }
      />
      {
        console.log(checkIfRecipeIsDone(+(params.idDrink)))
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
        checkIfRecipeIsDone(+(params.idDrink)) && (
          <RecipeButton
            id={ drink.idDrink }
            favoriteRecipes={ favoriteRecipes }
            inProgressRecipes={ inProgressRecipes }
            doneRecipes={ doneRecipes }
          />
        )
      }
    </main>
  );
}

DetailsDrink.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailsDrink;
