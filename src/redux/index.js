import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import countReducer from './reducers/count-reducer';

export default (preloadedState) => {
  const rootRedrucer = combineReducers({
    countData: countReducer,
  });

  return createStore(
    rootRedrucer,
    applyMiddleware(thunk),
  );
};
