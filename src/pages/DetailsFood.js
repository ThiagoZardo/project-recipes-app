import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import DrinkRecomended from '../components/DrinkRecomended';
import RecipeButton from '../components/RecipeButton';
import { checkIfMealIsInProgress, checkIfRecipeIsDone,
  setLocalStorage } from '../functions/checkLocalStorage';
import { fetchFoodById } from '../helpers';
import { detailFood, drinkApi } from '../redux/actions';

function DetailsFood(props) {
  const { match } = props;
  const { params } = match;
  console.log(params.idMeal);
  const [meal, setMeal] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getDrinks = async () => {
      drinkApi(dispatch);
      const foodObject = await fetchFoodById(params.idMeal);
      dispatch(detailFood(foodObject.meals[0]));
      setMeal(foodObject.meals[0]);
    };
    getDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  setLocalStorage();
  return (
    <main>
      <HeaderDetails />
      <PrepareMethod />
      <DrinkRecomended />
      <RecipeButton
        id={ meal.idMeal }
        type="food"
        recipeDone={ checkIfRecipeIsDone(meal.idMeal) }
        continueRecipe={ checkIfMealIsInProgress(meal.idMeal) }
      />
    </main>
  );
}

DetailsFood.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default DetailsFood;
