import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkIfFavoriteRecipe } from '../functions/checkLocalStorage';

function HeaderDetails() {
  const stateDetailsFood = useSelector((state) => state.details.foodsDetails);
  console.log(stateDetailsFood);
  const stateDetailsDrink = useSelector((state) => state.details.drinksDetails);
  console.log(stateDetailsDrink);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const history = useHistory();

  const { idDrink } = stateDetailsDrink;
  const id = !idDrink ? stateDetailsFood.idMeal : stateDetailsDrink.idDrink;

  const shareImage = () => {
    setCopied(true);
    const { location: { pathname } } = history;
    const recipeUrl = `http://localhost:3000${pathname}`;
    copy(recipeUrl);
  };

  const favoriteChange = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (checkIfFavoriteRecipe(id)) {
      setIsFavorite(true);
    }
  }, [id]);

  return (
    <div>
      <img
        src={ !idDrink ? stateDetailsFood.strMealThumb : stateDetailsDrink.strDrinkThumb }
        alt="Meal"
        width="360"
        height="128"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">
        { !idDrink ? stateDetailsFood.strMeal : stateDetailsDrink.strDrink }
      </h3>
      <input
        type="image"
        src="/images/shareIcon.svg"
        alt="shareIcon"
        data-testid="share-btn"
        onClick={ shareImage }
      />
      {
        copied && <p>Link copied!</p>
      }
      <input
        type="image"
        src={ isFavorite ? '/images/blackHeartIcon.svg' : '/images/whiteHeartIcon.svg' }
        alt="favorite"
        data-testid="favorite-btn"
        onClick={ favoriteChange }
      />
      <h4 data-testid="recipe-category">
        {idDrink && stateDetailsDrink.strAlcoholic}
      </h4>
      <h5
        data-testid="recipe-category"
      >
        {!idDrink ? stateDetailsFood.strCategory : stateDetailsDrink.strCategory}
      </h5>
    </div>
  );
}

export default HeaderDetails;
