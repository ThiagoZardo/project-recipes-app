import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodsCard from '../components/FoodsCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import { foodApi } from '../redux/actions';
// import { fetchMeals } from '../helpers';

function Foods() {
  let storeFood = useSelector((state) => state.search.foodsSearch);
  const dispatch = useDispatch();
  const mealsArray = 12;
  if (!storeFood) storeFood = [];

  useEffect(() => {
    function fetchData() {
      foodApi(dispatch);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <Header heading="Foods" />
        <HeaderSearch />
      </header>
      {
        storeFood.slice(0, mealsArray)
          .map(({ strMeal, strMealThumb, idMeal }, index) => (
            <FoodsCard
              key={ idMeal }
              strMeal={ strMeal }
              strMealThumb={ strMealThumb }
              index={ index }
              idMeal={ idMeal }
            />))
      }
      <Footer />
    </div>
  );
}

export default Foods;
