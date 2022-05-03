import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import FoodRecomended from '../components/FoodRecomended';
import RecipeButton from '../components/RecipeButton';
import { fetchDrinkById } from '../helpers';
import { checkIfDrinkIsInProgress, checkIfRecipeIsDone,
  setLocalStorage } from '../functions/checkLocalStorage';
import { detailDrink, foodApi } from '../redux/actions';

function DetailsDrink(props) {
  const { match } = props;
  const { params } = match;
  const [drink, setDrink] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getFoods = async () => {
      foodApi(dispatch);
      const drinkObject = await fetchDrinkById(params.idDrink);
      dispatch(detailDrink(drinkObject.drinks[0]));
      setDrink(drinkObject.drinks[0]);
    };
    getFoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  setLocalStorage();

  return (
    <main>
      <HeaderDetails />
      <PrepareMethod />
      <FoodRecomended />
      <RecipeButton
        id={ drink.idDrink }
        type="drink"
        recipeDone={ checkIfRecipeIsDone(drink.idDrink) }
        continueRecipe={ checkIfDrinkIsInProgress(drink.idDrink) }
      />
    </main>
  );
}

DetailsDrink.propTypes = {
  match: PropTypes.node.isRequired,
};

export default DetailsDrink;
