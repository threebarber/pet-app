
const initialState = {
  keyword:"ALL",
  age: "ALL",
  size:"ALL",
  location:"ALL"
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_KEYWORD':
        return {...state, keyword: action.payload}
      case `SET_AGE`:
        return {...state, age: action.payload}
      case `SET_SIZE`:
        return {...state, size: action.payload}
        case 'SET_LOCATION':
          return {...state, location: action.payload}
      default:
        return state
    }
  }

  export const setFilterKeyword = keyword => {
    return {
      type: 'SET_KEYWORD',
      payload: keyword
    }
  }

  export const setFilterAge = age => {
    return {
      type: 'SET_AGE',
      payload: age
    }
  }


  export const setFilterSize = size => {
    return {
      type: 'SET_SIZE',
      payload: size
    }
  }


  export const setFilterLocation = location => {
    return {
      type: 'SET_LOCATION',
      payload: location
    }
  }

  export default filterReducer