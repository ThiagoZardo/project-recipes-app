import React from 'react';
import { useSelector } from 'react-redux';
import FoodsCard from '../components/FoodsCard';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import Footer from '../components/Footer';

function Foods() {
  let storeFood = useSelector((state) => state.search.foodsSearch);
  const mealsArray = 12;
  if (!storeFood) storeFood = [];
  return (
    <div>
      <header>
        <Header heading="Foods" />
        <HeaderSearch />
      </header>
      {
        storeFood.length > 1 && (
          storeFood.slice(0, mealsArray)
            .map(({ strMeal, strMealThumb, idMeal }, index) => (
              <FoodsCard
                key={ idMeal }
                strMeal={ strMeal }
                strMealThumb={ strMealThumb }
                index={ index }
              />))
        )
      }
      <Footer />
    </div>
  );
}

export default Foods;
