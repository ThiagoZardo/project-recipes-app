import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import FoodsCard from '../components/FoodsCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { foodApi } from '../redux/actions';
import { FoodAndDrink } from '../styles/FoodAndDrinkPage';

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
    <>
      <Header heading="Foods" />
      <Category heading="Foods" />
      <FoodAndDrink>
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
      </FoodAndDrink>
      <Footer />
    </>
  );
}

export default Foods;
