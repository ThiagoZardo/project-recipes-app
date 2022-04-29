import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function FoodRecomended(props) {
  const { recipeImage, recipeCategory, recipeTitle, key } = props;
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
        { recipeCategory }
      </h5>
    </section>
  );
}

export default FoodRecomended;

FoodRecomended.propTypes = {
  recipeImage: propTypes.shape().isRequired,
  recipeCategory: propTypes.shape().isRequired,
  recipeTitle: propTypes.shape().isRequired,
  key: propTypes.shape().isRequired,
};
