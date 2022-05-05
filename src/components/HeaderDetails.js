import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { checkIfFavoriteRecipe } from '../functions/checkLocalStorage';

function HeaderDetails() {
  const stateDetailsFood = useSelector((state) => state.details.foodsDetails);
  const stateDetailsDrink = useSelector((state) => state.details.drinksDetails);
  const [isFavorite, setIsFavorite] = useState(0);
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const itemId = pathname.split('/')[2];
  const type = (pathname.split('/')[1]).replace('s', '');

  const { idDrink } = stateDetailsDrink;
  const img = !idDrink ? stateDetailsFood.strMealThumb : stateDetailsDrink.strDrinkThumb;
  const title = !idDrink ? stateDetailsFood.strMeal : stateDetailsDrink.strDrink;
  const alcoholic = idDrink ? stateDetailsDrink.strAlcoholic : '';
  const ctegory = !idDrink ? stateDetailsFood.strCategory : stateDetailsDrink.strCategory;
  const nation = !idDrink ? stateDetailsFood.strArea : '';
  const favoriteObj = {
    id: itemId,
    type,
    nationality: nation,
    category: ctegory,
    alcoholicOrNot: alcoholic,
    name: title,
    image: img,
  };

  const shareImage = () => {
    setCopied(true);
    const recipeUrl = `http://localhost:3000${pathname.replace('/in-progress', '')}`;
    copy(recipeUrl);
  };

  const favoriteChange = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (checkIfFavoriteRecipe(itemId)) {
      setIsFavorite(true);
    }
  }, [itemId]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (isFavorite) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([...storage, favoriteObj]));
    } else {
      const newStorage = storage.filter((itemObject) => (
        itemObject.id !== itemId
      ));
      localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  return (
    <div>
      <img
        src={ img }
        alt="Meal"
        width="360"
        height="128"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{title}</h3>
      <input
        type="image"
        src="/images/shareIcon.svg"
        alt="shareIcon"
        data-testid="share-btn"
        onClick={ shareImage }
      />
      {copied && <p>Link copied!</p>}
      <input
        type="image"
        src={ isFavorite ? '/images/blackHeartIcon.svg' : '/images/whiteHeartIcon.svg' }
        alt="favorite"
        data-testid="favorite-btn"
        onClick={ favoriteChange }
      />
      <h4 data-testid="recipe-category">{alcoholic}</h4>
      <h5 data-testid="recipe-category">{ctegory}</h5>
    </div>
  );
}

export default HeaderDetails;
