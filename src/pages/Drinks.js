import React from 'react';
import { useSelector } from 'react-redux';
import DrinksCard from '../components/DrinksCard';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';

function Drinks() {
  let drinkStore = useSelector((state) => state.search.drinksSearch);
  console.log(drinkStore);
  if (!drinkStore) drinkStore = [];
  const drinkArray = 12;
  return (
    <div>
      <header>
        <Header heading="Drinks" />
        <HeaderSearch />
      </header>
      {
        drinkStore.length > 1 && (
          drinkStore.slice(0, drinkArray)
            .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
              <DrinksCard
                key={ idDrink }
                strDrink={ strDrink }
                strDrinkThumb={ strDrinkThumb }
                index={ index }
              />))
        )

      }
    </div>
  );
}

export default Drinks;
