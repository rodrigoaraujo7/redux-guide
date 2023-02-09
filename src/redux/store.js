import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'; // better logger when te root-reducer called

import rootReducer from './root-reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
})
export default store;