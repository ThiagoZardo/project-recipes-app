import React, { useEffect, useState } from 'react';
import FoodsFavoriteCard from '../components/FoodsFavoriteCard';
import Header from '../components/Header';

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
    <div>
      <header>
        <Header heading="Favorite Recipes" />
      </header>
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilterType('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilterType('food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilterType('drink') }
        >
          Drinks
        </button>
      </section>
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
    </div>
  );
}

export default Favorite;
