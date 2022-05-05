import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { checkIfIInProgressRecipe } from '../functions/checkLocalStorage';
import { filterIngredients, filterMeasures } from '../functions/filterRecipe';
import '../styles/recipeInProgress.css';
import { setLocalStorageDoneRecipes,
  setLocalStorageInProgress } from '../functions/LocalStorage';

function PrepareMethodInProgress() {
  const detailFood = useSelector((state) => state.details.foodsDetails);
  const detailDrink = useSelector((state) => state.details.drinksDetails);
  console.log(detailFood);
  const [check, setCheck] = useState([]);
  const history = useHistory();
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

  const verifyCheck = () => {
    const lastIndex = recipeIngredients.length - 1;
    const ultimoAdd = check.length - 1;
    if (lastIndex !== ultimoAdd) return true;
  };

  const handleCheck = () => {
    history.push('/done-recipes');
    setLocalStorageDoneRecipes(detailFood, detailDrink, itemId, type);
  };

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
              htmlFor={ index }
              className={ check.includes(ingredient) ? 'risk' : '' }
            >
              <input
                type="checkbox"
                name="check"
                id={ index }
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
        disabled={ verifyCheck() }
        onClick={ handleCheck }
      >
        FinishRecipe
      </button>
    </div>
  );
}

export default PrepareMethodInProgress;
