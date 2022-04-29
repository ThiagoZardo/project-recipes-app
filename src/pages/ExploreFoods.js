import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getSurpriseFoods } from '../helpers';

function ExploreFoods() {
  const history = useHistory();

  const btnSurpriseFood = async () => {
    const dataGetFoods = await getSurpriseFoods();
    const idFoodRandom = dataGetFoods.meals[0].idMeal;
    history.push(`/foods/${idFoodRandom}`);
  };

  return (
    <div>
      <header>
        <Header heading="Explore Foods" />
      </header>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push('/explore/foods/ingredients') }
      >
        By Ingredient
      </button>

      <button
        type="button"
        data-testid="explore-by-nationality"
        onClick={ () => history.push('/explore/foods/nationalities') }
      >
        By Nationality
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ btnSurpriseFood }
      >
        Surprise me!
      </button>

      <Footer />
    </div>
  );
}

export default ExploreFoods;
