import UserActionTypes from './action-types'

export const loginUser = (payload) => ({
  type: UserActionTypes.LOGIN, // type is required
  payload // payload isn't required, but here I need place a user data
})

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
})