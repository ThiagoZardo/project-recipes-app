import { combineReducers } from 'redux';
import details from './DetailsReducer';
import search from './SearchBarReducer';

const rootReducer = combineReducers({ search, details });

export default rootReducer;
