import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function HeaderDetails(props) {
  const { recipeImage, recipeTitle, recipeCategory } = props;
  return (
    <>
      <img
        src={ recipeImage }
        alt="Meal"
        width="360"
        height="128"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">
        { recipeTitle }
      </h3>
      <input
        type="image"
        src="images/drinkIcon.svg"
        alt="shareIcon"
        data-testid="share-btn"
      />
      <input
        type="image"
        src="images/blackHeartIcon.svg"
        alt="favorite heart"
        data-testid="favorite-btn"
      />
      <h5
        data-testid="recipe-category"
      >
        { recipeCategory}
      </h5>
    </>
  );
}

export default HeaderDetails;

HeaderDetails.propTypes = {
  recipeImage: propTypes.shape().isRequired,
  recipeTitle: propTypes.shape().isRequired,
  recipeCategory: propTypes.shape().isRequired,
};
