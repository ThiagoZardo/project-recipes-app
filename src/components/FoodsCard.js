import PropTypes from 'prop-types';
import React from 'react';

function FoodsCard(props) {
  const { index, strMealThumb, strMeal } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid={ `${index}-card-img` }
      />
      <h4 data-testid={ `${index}-card-name` }>{strMeal}</h4>
    </div>
  );
}

FoodsCard.propTypes = {
  index: PropTypes.node.isRequired,
  strMeal: PropTypes.node.isRequired,
  strMealThumb: PropTypes.node.isRequired,
};

export default FoodsCard;
