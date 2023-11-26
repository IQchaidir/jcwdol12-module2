/** @format */

import { decrement, increment } from "../../constant/constant";

const initalState = {
  value: 1000,
};
export const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case increment:
      return { value: state.value + 1 };
    case decrement:
      return { value: state.value - 1 };
    default:
      return state;
  }
};

//sebuah reducer =  counterreducer
//terdapat kondisi => increment tambah 1
//                    decrement kurang 1
