import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactions: [], // Initialize transactions as an empty array
};

export const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {
        setTransaction: (state, action) => {
            if (!state.transactions?.length) {
                state.transactions = [action.payload];
            } else {
                state.transactions.push(action.payload);
            }
        },
        removeTransaction: (state, action) => {
            state.transactions = state.transactions.filter(tx => tx.id !== parseFloat(action.payload));
        },
        setTransactionFromLocalStorage: (state, action) => {
            state.transactions = action.payload;
        }
    }
});

export const { setTransaction, removeTransaction, setTransactionFromLocalStorage } = expenseSlice.actions;
export default expenseSlice.reducer;
