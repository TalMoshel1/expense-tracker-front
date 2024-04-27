import sliceReducer from './reducer'
import {configureStore} from '@reduxjs/toolkit'


const saveStateMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('transactions', JSON.stringify(store.getState().transactions.transactions));
    return result;
  };



const preloadedState = { transactions: [] }



export const store = configureStore({
  reducer: { transactions: sliceReducer },
  transactions: preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware)
});


