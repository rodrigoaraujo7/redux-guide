import UserActionTypes from './action-types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  if(action.type === UserActionTypes.LOGIN) {
    // returning the payload data from
    // dispatch in Header component (Line: 26)
    return { ...state, currentUser: action.payload }
  }

  if(action.type === UserActionTypes.LOGOUT) {
    return { ...state, currentUser: null }
  }

  return state; // required return to fix error
};

export default userReducer;