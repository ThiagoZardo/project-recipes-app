import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksCard from '../components/DrinksCard';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';
import { drinkApi } from '../redux/actions';

function Drinks() {
  let drinkStore = useSelector((state) => state.search.drinksSearch);
  const dispatch = useDispatch();
  if (!drinkStore) drinkStore = [];
  const drinkArray = 12;

  useEffect(() => {
    function fetchData() {
      drinkApi(dispatch);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <Header heading="Drinks" />
        <HeaderSearch />
      </header>
      {
        drinkStore.slice(0, drinkArray)
          .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            <DrinksCard
              key={ idDrink }
              strDrink={ strDrink }
              strDrinkThumb={ strDrinkThumb }
              index={ index }
              idDrink={ idDrink }
            />))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
