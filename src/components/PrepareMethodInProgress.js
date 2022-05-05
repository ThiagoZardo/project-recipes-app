import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkIfIInProgressRecipe } from '../functions/checkLocalStorage';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
import '../styles/recipeInProgress.css';
import setLocalStorageInProgress from '../functions/LocalStorage';

function PrepareMethodInProgress() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  const [check, setCheck] = useState([]);
  const locate = useLocation();
  const { pathname } = locate;
  const type = pathname.split('/')[1];
  const itemId = pathname.split('/')[2];
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
  // Ajuda do nosso colega Zardo, pela essa lógica maravilhosa.

  useEffect(() => {
    const arrayCheck = checkIfIInProgressRecipe(type, itemId);
    if (arrayCheck !== undefined) setCheck(arrayCheck);
    else setCheck([]);
  }, []);

  useEffect(() => {
    setLocalStorageInProgress(type, check, itemId);
  }, [check]);

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
