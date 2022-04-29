import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function FoodsCard(props) {
  const { index, strMealThumb, strMeal, idMeal } = props;
  const history = useHistory();
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <button
        type="button"
        onClick={ () => history.push(`/foods/${idMeal}`) }
      >
        <img
          src={ strMealThumb }
          alt={ strMeal }
          data-testid={ `${index}-card-img` }
        />
        <h4 data-testid={ `${index}-card-name` }>{strMeal}</h4>
      </button>
    </div>
  );
}

FoodsCard.propTypes = {
  index: PropTypes.node.isRequired,
  strMeal: PropTypes.node.isRequired,
  strMealThumb: PropTypes.node.isRequired,
  idMeal: PropTypes.node.isRequired,
};

export default FoodsCard;
