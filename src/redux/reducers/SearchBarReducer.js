const INITIAL_STATE = {
  searchValue: '',
};

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_END_POINT':
    return {
      ...state,
      searchValue: action.nameValue,
    };
  default:
    return state;
  }
};

export default search;
