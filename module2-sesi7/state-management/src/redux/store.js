/** @format */

//ini tempat global state
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import counterSlice from "./slices/counterSlice";

const rootReducers = combineReducers({
  counter: counterReducer,
  counter2: counterSlice,
}); //mengumpulkan reducer menjadi sebuah key dalam object

export const store = configureStore({
  reducer: rootReducers,
});
//store = global state
