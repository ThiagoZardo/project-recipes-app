const INITIAL_STATE = {
  foodsDetails: {},
  drinksDetails: {},
};

const details = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'GET_DETAILSDRINK':
    return {
      ...state,
      drinksDetails: action.drink,
    };
  case 'GET_DETAILSFOOD':
    return {
      ...state,
      foodsDetails: action.food,
    };
  default:
    return state;
  }
};

export default details;
