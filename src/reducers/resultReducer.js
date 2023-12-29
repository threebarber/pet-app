
import { createSlice } from '@reduxjs/toolkit'


const resultReducer = (state=[], action) => {
    switch (action.type) {
      case 'SET_RESULTS':
        return action.payload
      default:
        return state
    }
  }

  export const setResults = resultsList => {
    return {
      type: 'SET_RESULTS',
      payload: resultsList,
    }
  }

  export default resultReducer