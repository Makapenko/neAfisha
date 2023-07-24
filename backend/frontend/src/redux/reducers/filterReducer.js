import { SUBCAT_ON_OFF, SUBCAT_ON, SUBCAT_OFF } from '../actionTypes'

const initialState = {
  subcategories: {
    // Фильмы
    premiers: false,
    rerun: false,
    // Театр
    drama: false,
    chamber: false,
    // Концерты
    rock: false,
    rap: false,
    // Экскурсии
    groupExcursion: false,
    privateExcursion: false,
    // Обучение
    lections: false,
    masterClass: false,
    educationOthers: false,
    // Выставки
    painting: false,
    expositionOther: false,
    // Квесты
    horrorQuest: false,
    questOther: false,
    // Бары
    barCinema: false,
    barLections: false,
    degustations: false,
    // Вечеринки
    dances: false,
    concerts: false,
    adults: false,
    // Спорт
    sportCompetition: false,
    sportFreeLesson: false,
    // Другое
    psychology: false,
    otherOther: false,
  },
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBCAT_ON_OFF:
      for (const [key, value] of Object.entries(state.subcategories)) {
        if (key === action.payload) {
          state.subcategories[key] = !value
        }
      }

      return {
        ...state,
        subcategories: {
          ...state.subcategories,
        },
      }

    case SUBCAT_ON:
      for (const key of Object.keys(state.subcategories)) {
        if (key === action.payload) {
          state.subcategories[key] = true
        }
      }

      return {
        ...state,
        subcategories: {
          ...state.subcategories,
        },
      }
    case SUBCAT_OFF:
      for (const key of Object.keys(state.subcategories)) {
        if (key === action.payload) {
          state.subcategories[key] = false
        }
      }

      return {
        ...state,
        subcategories: {
          ...state.subcategories,
        },
      }

    default:
      return state
  }
}

export default filterReducer
