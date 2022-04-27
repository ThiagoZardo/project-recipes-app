const INITIAL_STATE = {
  searchValue: '',
  foodsSearch: [],
  drinksSearch: [],
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
      foodsSearch: action.food,
    };
  case 'GET_DRINK':
    return {
      drinksSearch: action.drink,
    };
  default:
    return state;
  }
};

export default search;
