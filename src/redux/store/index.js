import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const { createStore, applyMiddleware } = require('redux');

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
