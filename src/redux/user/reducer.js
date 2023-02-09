import UserActionTypes from './action-types'

const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case UserActionTypes.LOGIN:
      // returning the payload data from
      // dispatch in Header component (Line: 26)
      return { ...state, currentUser: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state; // required return to fix error
  }
};

export default userReducer;