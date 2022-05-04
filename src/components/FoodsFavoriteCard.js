import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';

function FoodsFavoriteCard(props) {
  const { index, recipe, setFavoriteRecipes } = props;

  const [copied, setCopied] = useState(false);

  const shareLinkRecipe = () => {
    const magicNumber = 1000;
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, magicNumber);
    const urlRecipe = `http://localhost:3000/foods/${recipe.id}`;
    copy(urlRecipe);
  };

  const removeFavorite = () => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const newStorage = storage.filter((itemObject) => (
      itemObject.id !== recipe.id
    ));
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
    setFavoriteRecipes(newStorage);
  };

  return (
    <>
      <img
        src={ recipe.image }
        alt="comida favorita"
        data-testid={ `${index}-horizontal-image` }
      />
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        {
          recipe.type === 'food' ? (`${recipe.nationality} - ${recipe.category}`) : (
            `${recipe.alcoholicOrNot}`
          )
        }
      </p>
      <p
        data-testid={ `${index}-horizontal-name` }
      >
        {recipe.name}
      </p>
      <input
        type="image"
        src="/images/shareIcon.svg"
        alt="shareIcon"
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ shareLinkRecipe }
      />
      { copied && <p>Link copied!</p> }
      <input
        type="image"
        src="/images/blackHeartIcon.svg"
        alt="favorite"
        data-testid={ `${index}-horizontal-favorite-btn` }
        onClick={ removeFavorite }
      />
      <br />
    </>
  );
}

FoodsFavoriteCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setFavoriteRecipes: PropTypes.func.isRequired,
};

export default FoodsFavoriteCard;
