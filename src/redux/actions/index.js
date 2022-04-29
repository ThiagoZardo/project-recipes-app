import { fetchDrinks, fetchMeals } from '../../helpers';

export const inputBar = (nameValue) => ({
  type: 'SET_END_POINT',
  nameValue,
});

export const searchFood = (food) => ({ type: 'GET_FOOD', food });
export const searchDrink = (drink) => ({ type: 'GET_DRINK', drink });

export const foodApi = async (dispatch) => {
  const data = await fetchMeals();
  dispatch(searchFood(data.meals));
};

export const drinkApi = async (dispatch) => {
  const data = await fetchDrinks();
  dispatch(searchDrink(data.drinks));
};
