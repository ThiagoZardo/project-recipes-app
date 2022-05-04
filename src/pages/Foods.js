import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FoodsCard from '../components/FoodsCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderSearch from '../components/HeaderSearch';
import { foodApi } from '../redux/actions';

function Foods() {
  const storeFood = useSelector((state) => state.search.foodsSearch);
  const ingredientFoodFilter = useSelector((state) => state.search.foodIngredient);
  const dispatch = useDispatch();
  const mealsArray = 12;

  useEffect(() => {
    function fetchData() {
      if (storeFood.length === 0) foodApi(dispatch);
    }
    if (storeFood.length === 0) {
      fetchData();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <Header heading="Foods" />
        <HeaderSearch />
      </header>
      {
        ingredientFoodFilter.length > 0
          ? (
            ingredientFoodFilter.slice(0, mealsArray)
              .map(({ strMeal, strMealThumb, idMeal }, index) => (
                <FoodsCard
                  key={ idMeal }
                  strMeal={ strMeal }
                  strMealThumb={ strMealThumb }
                  index={ index }
                  idMeal={ idMeal }
                />))
          )
          : (
            storeFood.slice(0, mealsArray)
              .map(({ strMeal, strMealThumb, idMeal }, index) => (
                <FoodsCard
                  key={ idMeal }
                  strMeal={ strMeal }
                  strMealThumb={ strMealThumb }
                  idMeal={ idMeal }
                  index={ index }
                />))
          )

      }
      <Footer />
    </div>
  );
}

export default Foods;
