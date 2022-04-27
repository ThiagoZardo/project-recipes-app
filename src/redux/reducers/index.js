import { combineReducers } from 'redux';
import search from './SearchBarReducer';

const rootReducer = combineReducers({ search });

export default rootReducer;
