const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  if(action.type === 'user/login') {
    // returning the payload data from
    // dispatch in Header component (Line: 26)
    return { ...state, currentUser: action.payload }
  }

  return state; // required return to fix error
};

export default userReducer;