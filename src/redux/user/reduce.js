const initialState = {
  currentUser: null
}

const userReducer = (state = initialState, action) => {
  if(action.type === 'user/login') {
    return { ...state, currentUser: 10 }
  }

  return state; // required return to fix error
};

export default userReducer;