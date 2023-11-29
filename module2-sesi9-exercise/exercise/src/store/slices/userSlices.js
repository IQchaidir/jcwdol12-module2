import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  count: 0,
};

const slices = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInitialData(state, action) {
      state.data = action.payload;
      state.count = action.payload.length;
    },
    addUser(state, action) {
      state.data.push(action.payload);
      state.count++;
    },
  },
});

export const { setInitialData, addUser } = slices.actions;

export default slices.reducer;
