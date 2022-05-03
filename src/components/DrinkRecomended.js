import React from 'react';
import { useSelector } from 'react-redux';

function DrinkRecomended() {
  const drinkState = useSelector((state) => state.search.drinksSearch);
  const maxRecomended = 6;
  return (
    <section data-testid="0-recomendation-card">
      {
        drinkState.slice(0, maxRecomended).map((drink) => (
          <>
            <img
              src={ drink.strDrinkThumb }
              alt="drink"
              width="360"
              height="128"
            />
            <h3>{drink.strDrink}</h3>
            <h5>{drink.strAlcoholic}</h5>
          </>
        ))
      }
    </section>
  );
}

export default DrinkRecomended;
