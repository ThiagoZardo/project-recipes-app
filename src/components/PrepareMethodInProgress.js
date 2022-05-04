import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkIfMealIsInProgress } from '../functions/checkLocalStorage';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
import '../styles/recipeInProgress.css';

function PrepareMethodInProgress() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  const [check, setCheck] = useState([]);
  const locate = useLocation();
  const { pathname } = locate;
  const type = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];
  const idCock = type === 'drinks' ? itemId : '';
  const idMeal = type === 'foods' ? itemId : '';
  const { idDrink } = detailDrink;
  const ifDetail = !idDrink ? detailFood : detailDrink;
  const recipeIngredients = filterIngredients(ifDetail);
  const recipeMeasures = filterMeasures(ifDetail);

  const checkedOne = (e) => {
    let updateList = [...check];
    if (e.target.checked) {
      updateList = [...check, e.target.value];
    } else {
      updateList.splice(check.indexOf(e.target.value), 1);
    }
    setCheck(updateList);
  };

  useEffect(() => {
    const Storage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const getItem = type === 'drinks' ? Storage.cocktails : Storage.meals;
    if (type === 'foods' && checkIfMealIsInProgress(idMeal)) {
      const keyMeal = Object.keys(getItem).filter((key) => key === idMeal);
      setCheck([...getItem[keyMeal[0]]]);
    }
  }, [check]);

  useEffect(() => {
    const ingredientfood = type === 'foods' ? check : [];
    const ingredientdrink = type === 'drinks' ? check : [];
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const inProgressObj = {
      cocktails: {
        ...inProgress.cocktails,
        [idCock]: ingredientdrink,
      },
      meals: {
        ...inProgress.meals,
        [idMeal]: ingredientfood,
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressObj));
  }, [check]);

  // Ajuda do nosso colega Zardo, pela essa lógica maravilhosa.

  return (
    <div>
      <section>
        <p>Ingredientes</p>
        { recipeIngredients.map((ingredient, index) => (
          <div
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <label
              htmlFor={ `${index}-done` }
              className={ check.includes(ingredient) ? 'risk' : '' }
            >
              <input
                type="checkbox"
                name="check"
                id={ `${index}-done` }
                checked={ check.includes(ingredient) }
                value={ ingredient }
                onChange={ checkedOne }
              />
              { ingredient }
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
