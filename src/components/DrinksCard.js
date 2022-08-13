import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from '../styles/FoodAndDrinkPage';

function DrinksCard(props) {
  const { index, strDrinkThumb, strDrink, idDrink } = props;
  const history = useHistory();
  return (
    <Card data-testid={ `${index}-recipe-card` }>
      <button
        type="button"
        onClick={ () => history.push(`/drinks/${idDrink}`) }
      >
        <img
          src={ strDrinkThumb }
          alt={ strDrink }
          data-testid={ `${index}-card-img` }
        />
        <div>
          <h4 data-testid={ `${index}-card-name` }>{strDrink}</h4>
        </div>
      </button>
    </Card>
  );
}

DrinksCard.propTypes = {
  index: PropTypes.node.isRequired,
  strDrink: PropTypes.node.isRequired,
  strDrinkThumb: PropTypes.node.isRequired,
  idDrink: PropTypes.node.isRequired,
};

export default DrinksCard;
