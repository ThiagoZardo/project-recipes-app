import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getSurpriseDrinks } from '../helpers';
import Explores, { ExplorerHeaderFoodDrink } from '../styles/ExploreCSS';

function ExploreDrinks() {
  const history = useHistory();

  const btnSurpriseDrink = async () => {
    const dataGetDrinks = await getSurpriseDrinks();
    const idDrinkRandom = dataGetDrinks.drinks[0].idDrink;
    console.log(idDrinkRandom);
    history.push(`/drinks/${idDrinkRandom}`);
  };

  return (
    <>
      <ExplorerHeaderFoodDrink>
        <Header heading="Explore Drinks" />
      </ExplorerHeaderFoodDrink>
      <Explores>
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
        <img src="/images/wine.svg" alt="wine" />
      </Explores>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
