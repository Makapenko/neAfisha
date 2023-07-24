// action Types
const SET_DATE_CALENDAR = 'SET_DATE_CALENDAR'
const SET_DATE_TODAY_ON = 'SET_DATE_TODAY_ON'
const SET_DATE_TODAY_OFF = 'SET_DATE_TODAY_OFF'
const TOGGLE_DATE_PICKER = 'TOGGLE_DATE_PICKER'
const TOGGLE_FREE_PICKER = 'TOGGLE_FREE_PICKER'

const initialState = {
  dateFromCalendar: null,
  selectedDate: null,
  isDatePickerOpen: false,
  isFree: false,
}

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE_CALENDAR:
      return {
        ...state,
        selectedDate: action.payload,
        dateFromCalendar: action.payload,
      }

    case SET_DATE_TODAY_ON:
      return {
        ...state,
        selectedDate: new Date(),
      }

    case SET_DATE_TODAY_OFF: {
      const isToday = (date) => {
        const today = new Date()
        return (
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear()
        )
      }

      if (state.dateFromCalendar === null || isToday(state.dateFromCalendar)) {
        return {
          ...state,
          selectedDate: null,
        }
      } else {
        return {
          ...state,
          selectedDate: state.dateFromCalendar,
        }
      }
    }

    case TOGGLE_DATE_PICKER:
      return {
        ...state,
        isDatePickerOpen: !state.isDatePickerOpen,
      }

    case TOGGLE_FREE_PICKER:
      return {
        ...state,
        isFree: !state.isFree,
      }

    default:
      return state
  }
}

export default dateReducer

// Action Creators
export const setDateCalendarAC = (date) => ({
  type: SET_DATE_CALENDAR,
  payload: date,
})

export const setDateTodayOnAC = (date) => ({
  type: SET_DATE_TODAY_ON,
  payload: date,
})

export const setDateTodayOffAC = (date) => ({
  type: SET_DATE_TODAY_OFF,
  payload: date,
})

export const toggleDatePickerAC = () => ({
  type: TOGGLE_DATE_PICKER,
})

export const toggleFreePickerAC = () => ({
  type: TOGGLE_FREE_PICKER,
})
