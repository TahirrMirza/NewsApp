// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import thunk from 'redux-thunk';
// import Reducer from './reducers';
// const rootReducer = combineReducers({
//   Reducer,
// });
// const middleware = [thunk];

// export const store = createStore(rootReducer, applyMiddleware(...middleware));

import {configureStore} from '@reduxjs/toolkit';
import newsReducer from './features/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
