import React, { createRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Scrollbar } from "react-scrollbars-custom"
import {
  fetchLocationsThunk,
  fetchEventsByLocationIdThunk,
} from "../../../redux/reducers/addEventsReducer"

const LocationsList = () => {
  const dispatch = useDispatch()
  const locationsTitlesList = useSelector(
    (state) => state.addEventsReducer.locationsTitlesList
  )

  useEffect(() => {
    dispatch(fetchLocationsThunk())
  }, [dispatch])

  const handleScrollUp = () => {
    scrollbarsRef.current.scrollTop -= 50
  }

  const handleScrollDown = () => {
    scrollbarsRef.current.scrollTop += 50
  }

  const handleLocationClick = (locationId) => (event) => {
    event.preventDefault()
    dispatch(fetchEventsByLocationIdThunk(locationId))
  }

  const scrollbarsRef = createRef()

  return (
    <div>
      <button onClick={handleScrollUp}>⬆</button>
      <Scrollbar ref={scrollbarsRef} style={{ height: 200 }}>
        <ol>
          {locationsTitlesList.map((location) => (
            <li key={location.id}>
              {location.title}
              <button onClick={handleLocationClick(location.id)}>
                Выбрать
              </button>
            </li>
          ))}
        </ol>
      </Scrollbar>
      <button onClick={handleScrollDown}>⬇</button>
    </div>
  )
}

export default LocationsList
