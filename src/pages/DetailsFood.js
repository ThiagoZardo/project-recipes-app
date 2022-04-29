import React, { useEffect, useState } from 'react';
import meal from '../tests/mocks/meals';
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

function DetailsFood() {
  const recipeIngredients = filterIngredients(meal);
  const recipeMeasures = filterMeasures(meal);
  const videoUrl = meal.strYoutube.replace('watch?v=', 'embed/');

  /* const [foods, setFoods] = useState([]); */
  const [drinks, setDrinks] = useState([]);

  /* useEffect(() => {
    const getFoods = async () => {
      const allFoods = await fetchMeals();
      const sixFoods = getSixMeals(allFoods.meals);
      setFoods(sixFoods);
    };
    getFoods();
  }, []); */

  useEffect(() => {
    const getDrinks = async () => {
      const allDrinks = await fetchDrinks();
      const sixDrinks = getSixDrinks(allDrinks.drinks);
      setDrinks(sixDrinks);
    };
    getDrinks();
  }, []);

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
        /* foods.map((food) => (
          <Recomended
            key={ food.idMeal }
            recipeImage={ food.strMealThumb }
            recipeTitle={ food.strMeal }
            recipeCategory={ food.strCategory }
          /> */
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
      {/* <img
        src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
        alt="Meal"
        width="360"
        height="128"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">
        Título da Receita
      </h3>
      <input
        type="image"
        src="images/drinkIcon.svg"
        alt="shareIcon"
        data-testid="share-btn"
      />
      <input
        type="image"
        src="images/blackHeartIcon.svg"
        alt="favorite heart"
        data-testid="favorite-btn"
      />
      <h5
        data-testid="recipe-category"
      >
        Categoria da Receita
      </h5>
      <section>
        <p>Ingredientes</p>
        <p
          data-testid="index-ingredient-name-and-measure"
        >
          lista de ingredientes
        </p>
      </section>
      <article>
        <p>Instruções</p>
        <p
          data-testid="instructions"
        >
          lista de ingredientes
        </p>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/watch?v=VVnZd8A84z4"
          title="Vídeo da Receita"
        />
      </article> */}
    </main>
  );
}

export default DetailsFood;
