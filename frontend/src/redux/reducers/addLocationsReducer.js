// Импорт функций API для работы с местоположениями
import {
  fetchLocations,
  fetchSelectedLocation,
  addLocation,
  updateLocation,
  saveImage,
  deleteImage,
} from '../../api/api'

// Константы действий, которые определяют типы действий Redux, которые могут быть выполнены
const GET_LOCATIONS_TITLES_LIST = 'GET_LOCATIONS_TITLES_LIST'
const SET_SELECTED_LOCATION = 'SET_SELECTED_LOCATION'
const UPDATE_SELECTED_LOCATION = 'UPDATE_SELECTED_LOCATION'
const SET_NEW_LOCATION = 'SET_NEW_LOCATION'

// Начальное состояние для редьюсера
const initialState = {
  locationsTitlesList: [{ title: 'НОВАЯ ЛОКАЦИЯ' }],
  selectedLocation: null,
  newLocation: {},
}

// Redux reducer, который обрабатывает действия, связанные с местоположениями
const addLocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Обновление списка названий местоположений
    case GET_LOCATIONS_TITLES_LIST:
      return {
        ...state,
        locationsTitlesList: [{ title: 'НОВАЯ ЛОКАЦИЯ' }, ...action.payload],
      }
    // Установка выбранного местоположения
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      }
    // Обновление поля в выбранной локации
    case UPDATE_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: {
          ...state.selectedLocation,
          [action.payload.field]: action.payload.value,
        },
      }
    case SET_NEW_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      }
    default:
      return state
  }
}

export default addLocationsReducer

// Создатели действий для создания действий Redux, которые могут быть отправлены в хранилище

// Получение списка названий местоположений
function getLocationsTitilesListAC(payload) {
  return { type: GET_LOCATIONS_TITLES_LIST, payload }
}

// Установка выбранного местоположения
export function setSelectedLocationAC(payload) {
  return { type: SET_SELECTED_LOCATION, payload }
}

// Обновление выбраной локации при изменении инпутов
export function updateSelectedLocationAC(field, value) {
  return { type: UPDATE_SELECTED_LOCATION, payload: { field, value } }
}

// Сохранение введёных данных в новое местоположение при переходе на другую локацию
export function setNewLocationAC(payload) {
  return { type: SET_NEW_LOCATION, payload }
}

// Thunks для асинхронных действий
// Получение местоположений
export const fetchLocationsThunk = () => async (dispatch) => {
  const data = await fetchLocations()
  dispatch(getLocationsTitilesListAC(data.locations))
}

// Получение выбранного местоположения из бд и установка его в selectedLocation
export const fetchSelectedLocationThunk = (locationId) => async (dispatch) => {
  const data = await fetchSelectedLocation(locationId)
  dispatch(setSelectedLocationAC(data.location))
}

// Добавление местоположения
export const addLocationThunk = (locationData) => {
  return async () => {
    try {
      const response = await addLocation(locationData)
      if (!response.ok) {
        throw new Error('Failed to add location.')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

// Обновление местоположения в БД
export const updateLocationThunk = (locationId, locationData) => {
  return async () => {
    try {
      const response = await updateLocation(locationId, locationData)
      if (!response.ok) {
        throw new Error('Failed to update location.')
      }
    } catch (error) {
      console.error(error)
    }
  }
}

// Сохранение изображения и сохрание инофрмации о нём в бд, затем обновление страницы с локацией
export const saveImageAndUpdateLocationThunk = (
  imageUrlInput,
  photos,
  locationId,
  selectedLocation
) => {
  return async (dispatch) => {
    try {
      // Выполняем асинхронный запрос на сохранение изображения с использованием функции saveImage, которая принимает URL изображения.
      const response = await saveImage(imageUrlInput)

      // Извлекаем новый URL изображения из ответа
      const newImageUrl = response.imageUrl

      // Создаем новый массив URL-ов изображений, добавляя новый URL в конец существующего массива.
      // Если photos.url не существует (photos может быть undefined), то создаем новый массив только с новым URL изображения.
      const newUrls = photos?.url ? [...photos.url, newImageUrl] : [newImageUrl]

      // Обновляем selectedLocation перед отправкой в базу данных.
      selectedLocation.url = newUrls

      // Обновляем информацию о местоположении в БД.
      await dispatch(updateLocationThunk(locationId, selectedLocation))

      // Получаем обновленные данные о местоположении и обновляем состояние.
      await dispatch(fetchSelectedLocationThunk(locationId))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteImageAndUpdateLocationThunk = (imageUrl, locationId) => {
  return async (dispatch) => {
    try {
      await deleteImage(imageUrl)

      await dispatch(fetchSelectedLocationThunk(locationId))
    } catch (error) {
      console.error(error)
    }
  }
}
