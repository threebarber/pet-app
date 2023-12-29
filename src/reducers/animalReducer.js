
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  animal: "",
  isSet: false
}

const animalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ANIMAL':
        return {...state, animal: action.payload, isSet: true}
      default:
        return state
    }
  }

  export const setAnimal = animal => {
    return {
      type: 'SET_ANIMAL',
      payload: animal
    }
  }

  export default animalReducer