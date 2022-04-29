import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getSurpriseDrinks } from '../helpers';

function ExploreDrinks() {
  const history = useHistory();

  const btnSurpriseDrink = async () => {
    const dataGetDrinks = await getSurpriseDrinks();
    const idDrinkRandom = dataGetDrinks.drinks[0].idDrink;
    console.log(idDrinkRandom);
    history.push(`/drinks/${idDrinkRandom}`);
  };

  return (
    <div>
      <header>
        <Header heading="Explore Drinks" />
      </header>
      <div>
        <header>
          <Header heading="Explore Foods" />
        </header>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ btnSurpriseDrink }
        >
          Surprise me!
        </button>

        <Footer />
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
