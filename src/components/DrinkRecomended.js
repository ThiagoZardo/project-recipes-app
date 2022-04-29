import React from 'react';
import PropTypes from 'prop-types';

function DrinkRecomended(props) {
  const { recipeImage, recipeAlcoholic, recipeTitle, key } = props;
  return (
    <section data-testid={ `${key}-recomendation-card` }>
      <img
        src={ recipeImage }
        alt="Meal"
        width="360"
        height="128"
      />
      <h3>
        { recipeTitle }
      </h3>
      <h5>
        { recipeAlcoholic}
      </h5>
    </section>
  );
}

DrinkRecomended.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeAlcoholic: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default DrinkRecomended;
