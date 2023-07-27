import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers';
const rootReducer = combineReducers({
  Reducer,
});
const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
