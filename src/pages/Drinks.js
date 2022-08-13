import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrinksCard from '../components/DrinksCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { drinkApi } from '../redux/actions';
import Category from '../components/Category';
import { FoodAndDrink } from '../styles/FoodAndDrinkPage';

function Drinks() {
  let drinkStore = useSelector((state) => state.search.drinksSearch);
  const ingredientDrinkFilter = useSelector((state) => state.search.drinkIngredient);
  const dispatch = useDispatch();
  if (!drinkStore) drinkStore = [];
  const drinkArray = 12;

  useEffect(() => {
    function fetchData() {
      if (drinkStore.length === 0) drinkApi(dispatch);
    }
    if (drinkStore.length === 0) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header heading="Drinks" />
      <Category heading="Drinks" />
      <FoodAndDrink>
        {
          ingredientDrinkFilter.length > 0
            ? (
              ingredientDrinkFilter.slice(0, drinkArray)
                .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
                  <DrinksCard
                    key={ idDrink }
                    strDrink={ strDrink }
                    strDrinkThumb={ strDrinkThumb }
                    index={ index }
                    idDrink={ idDrink }
                  />))
            )
            : (
              drinkStore.slice(0, drinkArray)
                .map(({ strDrink, strDrinkThumb, idDrink }, index) => (
                  <DrinksCard
                    index={ index }
                    key={ idDrink }
                    strDrink={ strDrink }
                    idDrink={ idDrink }
                    strDrinkThumb={ strDrinkThumb }
                  />))
            )
        }
      </FoodAndDrink>
      <Footer />
    </>
  );
}

export default Drinks;
