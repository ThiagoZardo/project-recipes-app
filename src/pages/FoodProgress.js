import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/HeaderDetails';
import PrepareMethodInProgress from '../components/PrepareMethodInProgress';
import { fetchFoodById } from '../helpers';
import { detailFood } from '../redux/actions';
import { setLocalStorage } from '../functions/checkLocalStorage';

function FoodProgress(props) {
  const { match } = props;
  const { params } = match;
  const dispatch = useDispatch();
  useEffect(() => {
    const getFoods = async () => {
      const foodObject = await fetchFoodById(params.id);
      dispatch(detailFood(foodObject.meals[0]));
    };
    getFoods();
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

FoodProgress.propTypes = {
  match: PropTypes.node.isRequired,
};

export default FoodProgress;
