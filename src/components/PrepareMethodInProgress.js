import React from 'react';
import { useSelector } from 'react-redux';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';

function PrepareMethodInProgress() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  const { idDrink } = detailDrink;
  const ifDetail = !idDrink ? detailFood : detailDrink;
  const recipeIngredients = filterIngredients(ifDetail);
  const recipeMeasures = filterMeasures(ifDetail);
  return (
    <div>
      <section>
        <p>Ingredientes</p>
        { recipeIngredients.map((ingredient, index) => (
          <div
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <label htmlFor="done">
              <input
                type="checkbox"
                name="done"
                id="done"
              />
              <span>{ ingredient }</span>
            </label>
            {' - '}
            <span>{ recipeMeasures[index] }</span>
          </div>
        ))}
      </section>
      <p>Instruções</p>
      <p
        data-testid="instructions"
      >
        {!idDrink ? detailFood.strInstructions : detailDrink.strInstructions}
      </p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        FinishRecipe
      </button>
    </div>
  );
}

export default PrepareMethodInProgress;
