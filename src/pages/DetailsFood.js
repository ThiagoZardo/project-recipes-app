import React, { useEffect, useState } from 'react';
// import meal from '../tests/mocks/meals';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import DrinkRecomended from '../components/DrinkRecomended';
import RecipeButton from '../components/RecipeButton';
import {
  favoriteRecipes,
  inProgressRecipes,
  doneRecipes,
} from '../tests/mocks/localStorageMocks';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
/* import { fetchMeals } from '../helpers'; */
/* import getSixMeals from '../functions/getSixRecipes'; */
import { fetchDrinks } from '../helpers';
import getSixDrinks from '../functions/getSixDrinks';

function DetailsFood(props) {
  const [drinks, setDrinks] = useState([]);
  const [meal, setFood] = useState({});

  useEffect(() => {
    const getDrinks = async ({ id }) => {
      const allDrinks = await fetchDrinks();
      const sixDrinks = getSixDrinks(allDrinks.drinks);
      setDrinks(sixDrinks);
      const getMealObject = await functionDoApi(id);
      setFood(getMealObject);
    };
    getDrinks(props);
  }, [props]);

  const recipeIngredients = filterIngredients(meal);
  const recipeMeasures = filterMeasures(meal);
  const videoUrl = meal.strYoutube.replace('watch?v=', 'embed/');

  return (
    <main>
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
      />
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
      <RecipeButton
        id={ meal.idMeal }
        favoriteRecipes={ favoriteRecipes }
        inProgressRecipes={ inProgressRecipes }
        doneRecipes={ doneRecipes }
      />
    </main>
  );
}

export default DetailsFood;
