const PUSH_BUTTON = 'PUSH_BUTTON'

const initialState = {
  navigation: 'filter',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_BUTTON:
      return {
        ...state,
        navigation: action.payload,
      }
    default:
      return state
  }
}

export default userReducer

export const changeActiveNavigationButtonAC = (date) => ({
  type: PUSH_BUTTON,
  payload: date,
})
