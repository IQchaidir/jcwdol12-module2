/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    actionIncrement(state) {
      state.value += 1;
    },
    actionDecrement(state) {
      state.value -= 1;
    },
  },
});

export const { actionIncrement, actionDecrement } = counterSlice.actions;
export default counterSlice.reducer;
