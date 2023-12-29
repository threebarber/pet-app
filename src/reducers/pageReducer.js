import { createSlice } from "@reduxjs/toolkit";


const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREASE_PAGE":
      return state + 1
    case `DECREASE_PAGE`:
      return state - 1
    default:
      return state;
  }
};

export const incrPage = (state) => {
  return {
    type: "INCREASE_PAGE",
    payload: state,
  };
};

export const decrPage = (state) => {
  return {
    type: "DECREASE_PAGE",
    payload: state,
  };
};

export default pageReducer;
