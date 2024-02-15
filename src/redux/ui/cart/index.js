import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, {payload: dishId}) => {
      state[dishId] = (state[dishId] || 0) + 1;
    },
    decrement: (state, {payload: dishId}) => {
      state[dishId] = (state[dishId] || 0) - 1;

      if (state[dishId] <= 0) {
        delete state[dishId]
      }
    },
  },
  selectors: {
    selectDishAmountById: (state, dishId) => {
      return state[dishId] || 0;
    },
    selectDishesAmount: (state) =>
      Object.values(state).reduce((acc, amount) => {
        return acc + amount;
      },0),
    selectCartDishesIds: (state) => Object.keys(state),
  },
})

export const {selectDishAmountById, selectDishesAmount, selectCartDishesIds} = cartSlice.selectors;
export const {increment, decrement} = cartSlice.actions;