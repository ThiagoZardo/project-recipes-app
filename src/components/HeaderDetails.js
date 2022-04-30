import React from 'react';
import PropTypes from 'prop-types';
// import { copy } from 'fs-extra';

function HeaderDetails(props) {
  const { recipeImage, recipeTitle, recipeCategory } = props;
  // strSource

  const shareImage = () => {
    // copy(strSource);
  };

  return (
    <div>
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
        src="images/shareIcon.svg"
        alt="shareIcon"
        data-testid="share-btn"
        onClick={ shareImage }
      />
      <input
        type="image"
        src="images/whiteHeartIcon.svg"
        alt="favorite heart"
        data-testid="favorite-btn"
      />
      <h5
        data-testid="recipe-category"
      >
        { recipeCategory}
      </h5>
    </div>
  );
}

HeaderDetails.propTypes = {
  recipeImage: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipeCategory: PropTypes.string.isRequired,
};

export default HeaderDetails;
