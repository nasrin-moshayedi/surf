import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers';

const initState = {};

function initStore(initialState = initState) {
  const middlewares = applyMiddleware();
  return createStore(rootReducer, initialState, composeWithDevTools(middlewares))
}

export default initStore;
