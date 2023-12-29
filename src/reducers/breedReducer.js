

const initialState = {
  selectedBreed:"ALL",
  breedData: []
}

const breedReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BREED':
        return {...state, selectedBreed: action.payload}
      case 'SET_BREED_DATA':
        return{...state, breedData: action.payload}
      default:
        return state
    }
  }

  export const setSelectedBreed = breedChoice => {
    return {
      type: 'SET_BREED',
      payload: breedChoice
    }
  }

  export const setBreedData = breedData => {
    return {
      type: 'SET_BREED_DATA',
      payload: breedData
    }
  }


  export default breedReducer