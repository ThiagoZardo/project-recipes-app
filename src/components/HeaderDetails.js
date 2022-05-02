import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';

function HeaderDetails(props) {
  const { recipeImage, recipeTitle, recipeCategory, alcoholic } = props;
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const history = useHistory();

  const shareImage = () => {
    setCopied(true);
    const { location: { pathname } } = history;
    const recipeUrl = `http://localhost:3000${pathname}`;
    copy(recipeUrl);
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
      <button
        type="button"
        data-testid="share-btn"
        onClick={ shareImage }
      >
        <img src="/images/shareIcon.svg" alt="shareIcon" />
        {
          copied && <p>Link Copied!</p>
        }
      </button>
      <input
        type="image"
        src={ favorite ? '/images/blackHeartIcon.svg' : '/images/whiteHeartIcon.svg' }
        alt="favorite"
        data-testid="favorite-btn"
        onClick={ () => setFavorite(!favorite) }
      />
      <h4 data-testid="recipe-category">{alcoholic}</h4>
      <h5
        data-testid="recipe-category"
      >
        { recipeCategory}
      </h5>
    </div>
  );
}

HeaderDetails.propTypes = {
  recipeImage: PropTypes.node.isRequired,
  recipeTitle: PropTypes.node.isRequired,
  recipeCategory: PropTypes.node.isRequired,
  alcoholic: PropTypes.node.isRequired,
};

export default HeaderDetails;
