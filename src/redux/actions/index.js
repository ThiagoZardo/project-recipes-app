import { fetchDrinks, fetchMeals } from '../../helpers';

export const inputBar = (nameValue) => ({
  type: 'SET_END_POINT',
  nameValue,
});

export const searchFood = (food) => ({ type: 'GET_FOOD', food });
export const searchDrink = (drink) => ({ type: 'GET_DRINK', drink });

export const ingredientFood = (food) => ({ type: 'GET_FOOD_INGREDIENTS', food });
export const ingredientDrink = (drink) => ({ type: 'GET_DRINK_INGREDIENTS', drink });

export const foodApi = async (dispatch) => {
  const data = await fetchMeals();
  dispatch(searchFood(data.meals));
};

export const drinkApi = async (dispatch) => {
  const data = await fetchDrinks();
  dispatch(searchDrink(data.drinks));
};
