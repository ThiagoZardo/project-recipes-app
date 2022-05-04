import React, { useEffect, useState } from 'react';
import FoodsFavoriteCard from '../components/FoodsFavoriteCard';
import Header from '../components/Header';

function Favorite() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const localStorageFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavoriteRecipes(localStorageFavorite);
  }, []);

  return (
    <div>
      <header>
        <Header heading="Favorite Recipes" />
      </header>
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      <section>
        {
          favoriteRecipes && (
            favoriteRecipes.map((recipe, index) => (
              <FoodsFavoriteCard
                key={ index }
                index={ index }
                recipe={ recipe }
                setFavoriteRecipes={ setFavoriteRecipes }
              />
            ))
          )
        }
      </section>
    </div>
  );
}

export default Favorite;
