const INITIAL_STATE = {
  searchValue: '',
  foodsSearch: [],
  foodIngredient: [],
  drinksSearch: [],
  drinkIngredient: [],
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_END_POINT':
    return {
      ...state,
      searchValue: action.nameValue,
    };
  case 'GET_FOOD':
    return {
      ...state,
      foodsSearch: action.food,
    };
  case 'GET_DRINK':
    return {
      ...state,
      drinksSearch: action.drink,
    };
  case 'GET_FOOD_INGREDIENTS':
    return {
      ...state,
      foodIngredient: action.food,
    };
  case 'GET_DRINK_INGREDIENTS':
    return {
      ...state,
      drinkIngredient: action.drink,
    };
  default:
    return state;
  }
};

export default search;
