
import { createSlice } from '@reduxjs/toolkit'


const sessionReducer = (state = "", action) => {
    switch (action.type) {
      case 'SET_SESSION':
        return action.payload
      default:
        return state
    }
  }

  export const setSession = sessionToken => {
    return {
      type: 'SET_SESSION',
      payload: sessionToken,
    }
  }

  export default sessionReducer