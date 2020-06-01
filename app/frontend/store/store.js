import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, applyMiddleware(thunk, reduxLogger));
}

export default configureStore;