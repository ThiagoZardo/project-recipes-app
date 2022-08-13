import React, { useEffect, useState } from 'react';
import FoodsFavoriteCard from '../components/FoodsFavoriteCard';
import Header from '../components/Header';
import { CardFavorite, HeaderFavorite } from '../styles/RecipeFavorite';

function Favorite() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const [filteredItens, setFilteredItens] = useState([]);

  useEffect(() => {
    const localStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipes(localStorageFavorite);
  }, []);

  useEffect(() => {
    if (filterType !== 'all') {
      const favoritesFiltered = favoriteRecipes.filter((itemObject) => (
        filterType === itemObject.type
      ));
      setFilteredItens(favoritesFiltered);
    }
  }, [filterType, favoriteRecipes]);

  return (
    <>
      <HeaderFavorite>
        <Header heading="Favorite Recipes" />
      </HeaderFavorite>
      <CardFavorite>
        <div className="FavCategorias">
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => setFilterType('all') }
          >
            <img src="/images/All.svg" alt="All" />
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => setFilterType('food') }
          >
            <img src="/images/Beef.svg" alt="Food" />
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilterType('drink') }
          >
            <img src="/images/Ordinary Drink.svg" alt="Drink" />
            Drinks
          </button>
        </div>
        <section>
          {
            favoriteRecipes && (
              filterType === 'all' ? (
                favoriteRecipes.map((recipe, index) => (
                  <FoodsFavoriteCard
                    key={ index }
                    index={ index }
                    recipe={ recipe }
                    setFavoriteRecipes={ setFavoriteRecipes }
                  />
                ))
              ) : (
                filteredItens.map((recipe, key) => (
                  <FoodsFavoriteCard
                    key={ key }
                    index={ key }
                    recipe={ recipe }
                    setFavoriteRecipes={ setFavoriteRecipes }
                  />
                ))
              )
            )
          }
        </section>
      </CardFavorite>
    </>
  );
}

export default Favorite;
