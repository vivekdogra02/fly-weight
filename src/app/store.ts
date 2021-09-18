import { configureStore, ThunkAction, Action, compose  } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import logger from 'redux-logger';

const middleware = [logger];
const store = configureStore({
  reducer: rootReducer,
 middleware,
 devTools: true
});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch

export default store;

