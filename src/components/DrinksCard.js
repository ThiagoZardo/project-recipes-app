import PropTypes from 'prop-types';
import React from 'react';

function DrinksCard(props) {
  const { index, strDrinkThumb, strDrink } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid={ `${index}-card-img` }
      />
      <h4 data-testid={ `${index}-card-name` }>{strDrink}</h4>
    </div>
  );
}

DrinksCard.propTypes = {
  index: PropTypes.node.isRequired,
  strDrink: PropTypes.node.isRequired,
  strDrinkThumb: PropTypes.node.isRequired,
};

export default DrinksCard;
