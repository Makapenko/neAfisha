import React, { createRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Scrollbar } from "react-scrollbars-custom"
import {
  setSelectedEventAC,
  setNewEventAC,
} from "../../../redux/reducers/addEventsReducer"

const EventsList = () => {
  const dispatch = useDispatch()
  const eventsList = useSelector(
    (state) => state.addEventsReducer.eventsByLocationId
  )
  const selectedEvent = useSelector(
    (state) => state.addEventsReducer.selectedEvent
  )

  const newEvent = useSelector((state) => state.addEventsReducer.newEvent)

  const handleScrollUp = () => {
    scrollbarsRef.current.scrollTop -= 50
  }

  const handleScrollDown = () => {
    scrollbarsRef.current.scrollTop += 50
  }

  const handleEventClick = (event) => {
    if (selectedEvent?.id) {
      if (event) {
        dispatch(setSelectedEventAC(event))
      } else {
        dispatch(setSelectedEventAC(newEvent))
      }
    } else {
      if (event) {
        dispatch(setNewEventAC(event))
        dispatch(setSelectedEventAC(event))
      }
    }
  }

  const scrollbarsRef = createRef()

  return (
    <div>
      <button onClick={handleScrollUp}>⬆</button>
      <Scrollbar ref={scrollbarsRef} style={{ height: 200 }}>
        <ol>
          {eventsList.map((event) => (
            <li key={event.id}>
              {event.title}
              <button onClick={() => handleEventClick(event)}>Выбрать</button>
            </li>
          ))}
        </ol>
      </Scrollbar>
      <button onClick={handleScrollDown}>⬇</button>
    </div>
  )
}

export default EventsList
