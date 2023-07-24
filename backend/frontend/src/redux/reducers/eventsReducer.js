import { fetchAllData } from '../../api/api'

export const INIT_ALL = 'INIT_ALL'
export const WIDERELEASE = 'WIDERELEASE'
export const DEL_WIDERELEASE = 'DEL_WIDERELEASE'
export const IS_FREE_EVENT = 'IS_FREE_EVENT'
export const ALL_EVENT = 'ALL_EVENT'
export const IS_TODAY = 'IS_TODAY'
export const ALL_EVENT_IS_NOT_TODAY = 'ALL_EVENT_IS_NOT_TODAY'

const initialState = {
  locations: [],
  events: [],
}
const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ALL:
      return {
        ...state,
        events: action.payload.events,
        locations: action.payload.locations,
      }

    case WIDERELEASE: {
      let a = action.payload.all.events.filter(
        (el) => el.subcategory === action.payload.c
      )
      let arr = []

      state.locations.map((el) => {
        if (arr.indexOf(el.id) < 0) arr.push(el.id)
      })
      a.map((el) => {
        if (arr.indexOf(el.LocationId) < 0) arr.push(el.LocationId)
      })
      let arr1 = []
      action.payload.all.locations.map((el) => {
        if (arr.indexOf(el.id) >= 0) arr1.push(el)
      })

      return {
        ...state,
        events: [...state.events, ...a],
        locations: [...arr1],
      }
    }

    case DEL_WIDERELEASE: {
      let b = state.events.filter(
        (el) => el.subcategory !== `${action.payload}`
      )
      let arr2 = []
      b.map((el) => {
        if (arr2.indexOf(el.LocationId) < 0) arr2.push(el.LocationId)
      })
      let arrNew = []
      state.locations.map((el) => {
        if (arr2.indexOf(el.id) >= 0) arrNew.push(el)
      })

      return {
        ...state,
        events: b,
        locations: arrNew,
      }
    }

    case IS_FREE_EVENT: {
      const hasNumbers = (t) => {
        var regex = /\d/g
        return regex.test(t)
      }

      let all = action.payload.filter(function (el) {
        return hasNumbers(el.price) !== true
      })

      return {
        ...state,
        events: all,
      }
    }

    case ALL_EVENT: {
      const hasNumbers1 = (t) => {
        var regex = /\d/g
        return regex.test(t)
      }

      let all4 = action.payload.filter(function (el) {
        return hasNumbers1(el.price) === true
      })

      return {
        ...state,
        events: [...state.events, ...all4],
      }
    }

    case IS_TODAY: {
      let today1 = new Date().toISOString().slice(0, 10)
      let all1 = action.payload.filter(function (el) {
        return el.dateStart !== today1
      })

      return {
        ...state,
        events: all1,
      }
    }

    case ALL_EVENT_IS_NOT_TODAY: {
      let today = new Date().toISOString().slice(0, 10)
      let all2 = action.payload.filter(function (el) {
        return el.dateStart === today
      })

      return {
        ...state,
        events: [...state.events, ...all2],
      }
    }

    default:
      return state
  }
}
export default eventsReducer

// Action Creator
export const initializeAll = (data) => ({
  type: INIT_ALL,
  payload: data,
})

// Thunk function
export const fetchAndInitializeAllData = () => (dispatch) => {
  fetchAllData()
    .then((data) => {
      dispatch(initializeAll(data))
    })
    .catch((err) => console.log(err))
}
