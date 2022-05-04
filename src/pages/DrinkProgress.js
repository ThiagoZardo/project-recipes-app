import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethodInProgress from '../components/PrepareMethodInProgress';
import { detailDrink } from '../redux/actions';
import { fetchDrinkById } from '../helpers';
import { setLocalStorage } from '../functions/checkLocalStorage';

function DrinkProgress(props) {
  const { match } = props;
  const { params } = match;
  const dispatch = useDispatch();
  useEffect(() => {
    const getDrinks = async () => {
      const drinkObject = await fetchDrinkById(params.id);
      dispatch(detailDrink(drinkObject.drinks[0]));
    };
    getDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  setLocalStorage();
  return (
    <div>
      <HeaderDetails />
      <PrepareMethodInProgress />
    </div>
  );
}

DrinkProgress.propTypes = {
  match: PropTypes.node.isRequired,
};

export default DrinkProgress;
