import React from 'react';
import { useSelector } from 'react-redux';

function FoodRecomended() {
  const foodState = useSelector((state) => state.search.foodsSearch);
  const maxRecomend = 6;
  return (
    <section data-testid="0-recomendation-card">
      {
        foodState.slice(0, maxRecomend).map((food) => (
          <>
            <img
              src={ food.strMealThumb }
              alt="Meal"
              width="360"
              height="128"
            />
            <h3>{food.strMeal}</h3>
            <h5>{food.strCategory}</h5>
          </>
        ))
      }
    </section>
  );
}

export default FoodRecomended;
