// Импорт функций API для работы с местоположениями
import { fetchLocations, fetchEventsByLocationId } from '../../api/api'

const GET_LOCATIONS_TITLES_LIST = 'GET_LOCATIONS_TITLES_LIST'
const GET_EVENTS_BY_LOCATION_ID = 'GET_EVENTS_BY_LOCATION_ID'
const SET_SELECTED_EVENT = 'SET_SELECTED_EVENT'
const UPDATE_SELECTED_EVENT = 'UPDATE_SELECTED_EVENT'
const SET_NEW_EVENT = 'SET_NEW_EVENT'

// Начальное состояние для редьюсера
const initialState = {
  locationsTitlesList: [],
  eventsByLocationId: [{ title: 'НОВОЕ СОБЫТИЕ' }],
  selectedEvent: null,
  newEvent: {},
}

const addLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Обновление списка названий местоположений
    case GET_LOCATIONS_TITLES_LIST:
      return {
        ...state,
        locationsTitlesList: [...action.payload],
      }
    // Обновление списка событий для определенного местоположения
    case GET_EVENTS_BY_LOCATION_ID:
      return {
        ...state,
        eventsByLocationId: [{ title: 'НОВОЕ СОБЫТИЕ' }, ...action.payload],
      }
    // Выбраное событие в selectedEvent
    case SET_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      }
    // изменение выбраного события
    case UPDATE_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: {
          ...state.selectedEvent,
          [action.payload.field]: action.payload.value,
        },
      }
    case SET_NEW_EVENT:
      return {
        ...state,
        newEvent: action.payload,
      }
    default:
      return state
  }
}

export default addLocationsReducer

// Action Creators
function getLocationsTitlesListAC(payload) {
  return { type: GET_LOCATIONS_TITLES_LIST, payload }
}

function getEventsByLocationIdAC(payload) {
  return { type: GET_EVENTS_BY_LOCATION_ID, payload }
}

export function setSelectedEventAC(payload) {
  return { type: SET_SELECTED_EVENT, payload }
}

// Обновление выбраного события при изменении инпутов
export function updateSelectedEventAC(field, value) {
  return { type: UPDATE_SELECTED_EVENT, payload: { field, value } }
}

// Сохранение введёных данных в новое событие при переходе на другое
export function setNewEventAC(payload) {
  return { type: SET_NEW_EVENT, payload }
}

// Thunks
// Получение местоположений
export const fetchLocationsThunk = () => async (dispatch) => {
  const data = await fetchLocations()
  dispatch(getLocationsTitlesListAC(data.locations))
}

// Получение событий для определенного местоположения
export const fetchEventsByLocationIdThunk =
  (locationId) => async (dispatch) => {
    const events = await fetchEventsByLocationId(locationId)
    dispatch(getEventsByLocationIdAC(events))
  }
