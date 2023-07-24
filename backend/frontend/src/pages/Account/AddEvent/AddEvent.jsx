import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./AddEvent.module.css"
import LocationsList from "./LocationsList.jsx"
import EventsList from "./EventsList.jsx"
import Popup from "../Popup/Popup.jsx"
import InputField from "./InputField.jsx"
import { inputFieldsArray } from "./inputFieldsArray.js"
import { updateSelectedEventAC } from "../../../redux/reducers/addEventsReducer.js"

function AddEvent() {
  // const [sessionUserId, setsessionUserId] = useState(null);
  const dispatch = useDispatch()
  const selectedEvent = useSelector(
    (state) => state.addEventsReducer?.selectedEvent
  )
  const [popup, setPopup] = useState({ show: false, message: "" })
  const closePopup = () => {
    setPopup({ show: false, message: "" })
  }

  function addEventHandler(e) {
    e.preventDefault()

    const body = {
      LocationId: e.target.locationSelect.value,
      // AdminId: sessionUserId,
      title: e.target.title.value,
      description: e.target.description.value,
      subcategory: e.target.subcategory.value,
      price: e.target.price.value,
      startTime: e.target.startTime.value,
      endTime: e.target.endTime.value,
      doorsOpen: e.target.doorsOpen.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      linkToRegister: e.target.linkToRegister.value,
      linkToBuy: e.target.linkToBuy.value,
      linkToEvent: e.target.linkToEvent.value,
    }

    fetch(`${process.env.REACT_APP_SERVER_URL}/addEvent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ body }),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((err) => err.message)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateSelectedEventAC(name, value))
  }

  return (
    <div className={styles.allwrapper}>
      <h2>Add Event</h2>
      <div className={styles.listsWrapper}>
        <LocationsList />
        <EventsList />
      </div>
      <form onSubmit={addEventHandler}>
        <div className={styles.wrapper}>
          <div className={styles.wrapp}>
            <div> id: {selectedEvent?.id} </div>
            <div> AdminId: {selectedEvent?.id} </div>
            <b>Выбор места проведения события</b>
            {inputFieldsArray.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                value={selectedEvent?.[field.name]}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>
        <button> Сохранить </button>
      </form>
      <Popup
        show={popup.show}
        message={popup.message}
        closePopup={closePopup}
      />
    </div>
  )
}

export default AddEvent
