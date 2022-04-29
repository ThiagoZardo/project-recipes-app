import React, { useEffect, useState } from 'react';
import drink from '../tests/mocks/drinks';
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
import { fetchMeals } from '../helpers';
import getSixMeals from '../functions/getSixRecipes';

function DetailsDrink() {
  const recipeIngredients = filterIngredients(drink);
  const recipeMeasures = filterMeasures(drink);
  /* const videoUrl = drink.strYoutube.replace('watch?v=', 'embed/'); */

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoods = async () => {
      const allFoods = await fetchMeals();
      const sixFoods = getSixMeals(allFoods.meals);
      setFoods(sixFoods);
    };
    getFoods();
  }, []);

  return (
    <main>
      <HeaderDetails
        recipeImage={ drink.strDrinkThumb }
        recipeTitle={ drink.strDrink }
        recipeCategory={ drink.strCategory }
      />
      <PrepareMethod
        recipeIngredients={ recipeIngredients }
        recipeMeasures={ recipeMeasures }
        recipeInstructions={ drink.strInstructions }
        /*  recipeVideo={ videoUrl } */
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
      <RecipeButton
        id={ drink.idDrink }
        favoriteRecipes={ favoriteRecipes }
        inProgressRecipes={ inProgressRecipes }
        doneRecipes={ doneRecipes }
      />
    </main>
  );
}

export default DetailsDrink;
