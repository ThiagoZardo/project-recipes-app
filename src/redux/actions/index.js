export const inputBar = (nameValue) => ({
  type: 'SET_END_POINT',
  nameValue,
});

export const searchFood = (food) => ({ type: 'GET_FOOD', food });
export const searchDrink = (drink) => ({ type: 'GET_DRINK', drink });

// export const foodApi = () => async (dispatch) => {
//   const data = await fetchMeals();
//   console.log(data.meals);
//   dispatch(foodRequest(data.meals));
// };
