import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethod from '../components/PrepareMethod';
import FoodRecomended from '../components/FoodRecomended';
import RecipeButton from '../components/RecipeButton';
import { fetchDrinkById } from '../helpers';
import { setLocalStorage } from '../functions/checkLocalStorage';
import { detailDrink, foodApi } from '../redux/actions';
import { MainDetails } from '../styles/DetailsAll';

function DetailsDrink(props) {
  const { match } = props;
  const { params } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    const getFoods = async () => {
      foodApi(dispatch);
      const drinkObject = await fetchDrinkById(params.idDrink);
      dispatch(detailDrink(drinkObject.drinks[0]));
    };
    getFoods();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  setLocalStorage();

  return (
    <MainDetails>
      <HeaderDetails />
      <PrepareMethod />
      <FoodRecomended />
      <RecipeButton />
    </MainDetails>
  );
}

DetailsDrink.propTypes = {
  match: PropTypes.node.isRequired,
};

export default DetailsDrink;
