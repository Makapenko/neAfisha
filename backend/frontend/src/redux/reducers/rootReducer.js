import { combineReducers } from 'redux'
import dateReducer from './dateReducer'
import eventsReducer from './eventsReducer'
import favoriteReducer from './favoritesReducer'
import userReducer from './userReducer'
import navigationReducer from './navigationReducer'
import filterReducer from './filterReducer'
import addLocationsReducer from './addLocationsReducer'
import addEventsReducer from './addEventsReducer'

const rootReducer = combineReducers({
  dateReducer,
  eventsReducer,
  favoriteReducer,
  filterReducer,
  navigationReducer,
  userReducer,
  addLocationsReducer,
  addEventsReducer,
})
export default rootReducer
