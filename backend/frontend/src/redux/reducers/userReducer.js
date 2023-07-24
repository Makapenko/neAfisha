import { checkAuthenticationStatus, logout, login, signup } from '../../api/api'
export const IS_AUTHENTICATED = 'IS_AUTHENTICATED'

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' || false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED:
      if (typeof action.payload !== 'undefined') {
        return {
          ...state,
          isAuthenticated: action.payload,
        }
      }
      return state

    default:
      return state
  }
}

export default userReducer

// Action Creators
export function isAuthenticatedAC(isAuthenticated) {
  return { type: IS_AUTHENTICATED, payload: isAuthenticated }
}

// Thunk function
export const checkAuthenticationStatusThunk = () => async (dispatch) => {
  const isAuthenticated = await checkAuthenticationStatus()
  if (isAuthenticated) {
    dispatch(isAuthenticatedAC(isAuthenticated))
  }
}

export const handleSignup =
  (username, email, password, role) => async (dispatch) => {
    try {
      const data = await signup(username, email, password, role)
      if (data.code === 'ACCESS OK') {
        alert(data.message)
        localStorage.setItem('isAuthenticated', 'true')
        dispatch(isAuthenticatedAC(true))
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

export const handleLogin = (username, password) => async (dispatch) => {
  try {
    const data = await login(username, password)
    if (data.code === 'ACCESS OK') {
      localStorage.setItem('isAuthenticated', 'true')
      dispatch(isAuthenticatedAC(true))
    } else {
      alert(data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export const handleLogout = () => async (dispatch) => {
  try {
    await logout()
    localStorage.setItem('isAuthenticated', 'false')
    dispatch(isAuthenticatedAC(false))
  } catch (error) {
    console.error(error)
  }
}
