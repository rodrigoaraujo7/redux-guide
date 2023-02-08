import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; // better logger when te root-reducer called

import rootReducer from './root-reducer';

const store = createStore(rootReducer, applyMiddleware(logger));
export default store;