import React, { createRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Scrollbar } from "react-scrollbars-custom"
import {
  fetchLocationsThunk,
  fetchSelectedLocationThunk,
  setNewLocationAC,
  setSelectedLocationAC,
} from "../../../redux/reducers/addLocationsReducer"

const LocationsList = () => {
  const dispatch = useDispatch()
  const locationsTitlesList = useSelector(
    (state) => state.addLocationsReducer.locationsTitlesList
  )
  const selectedLocation = useSelector(
    (state) => state.addLocationsReducer.selectedLocation
  )
  const newLocation = useSelector(
    (state) => state.addLocationsReducer.newLocation
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

  const handleLocationClick = (locationId) => {
    if (selectedLocation?.id) {
      if (locationId) {
        dispatch(fetchSelectedLocationThunk(locationId))
      } else {
        dispatch(setSelectedLocationAC(newLocation))
      }
    } else {
      if (locationId) {
        dispatch(setNewLocationAC(selectedLocation))
        dispatch(fetchSelectedLocationThunk(locationId))
      }
    }
  }

  const scrollbarsRef = createRef()

  return (
    <div>
      <button onClick={handleScrollUp}>⬆</button>
      <Scrollbar ref={scrollbarsRef} style={{ height: 200 }}>
        <ol>
          {locationsTitlesList.map((location) => (
            <li
              key={location.id}
              style={{
                backgroundColor:
                  selectedLocation && selectedLocation.id === location.id
                    ? "blue"
                    : "white",
              }}
            >
              {location.title}
              <button onClick={() => handleLocationClick(location.id)}>
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
