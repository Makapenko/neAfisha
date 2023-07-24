import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  updateSelectedLocationAC,
  addLocationThunk,
  updateLocationThunk,
  fetchLocationsThunk,
} from "../../../redux/reducers/addLocationsReducer"
import styles from "./AddLocation.module.css"
import LocationsList from "./LocationsList.jsx"
import InputField from "./InputField"
import { inputFieldsArray } from "./inputFieldsArray"
import Popup from "../Popup/Popup.jsx"
import LocationPhotos from "./LocationPhotos.jsx"

// eslint-disable-next-line no-unused-vars
function AddLocation() {
  const dispatch = useDispatch()
  const selectedLocation = useSelector(
    (state) => state.addLocationsReducer?.selectedLocation
  )
  const [popup, setPopup] = useState({ show: false, message: "" })
  const closePopup = () => {
    setPopup({ show: false, message: "" })
  }

  const addLocationHandler = async (e) => {
    e.preventDefault()
    if (!selectedLocation) {
      console.log("selectedLocation is undefined")
      return
    }

    try {
      if (selectedLocation.id) {
        await dispatch(
          updateLocationThunk(selectedLocation.id, selectedLocation)
        )
        setPopup({ show: true, message: "Location updated successfully" })
      } else {
        await dispatch(addLocationThunk(selectedLocation))
        setPopup({ show: true, message: "Location added successfully" })
      }
      dispatch(fetchLocationsThunk())
    } catch (error) {
      console.error(error)
      setPopup({ show: true, message: `An error occurred: ${error}` })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch(updateSelectedLocationAC(name, value))
  }

  return (
    <div className={styles.allwrapper}>
      <h2>Add Location</h2>
      <LocationsList />
      <form action="" onSubmit={addLocationHandler}>
        <button> Сохранить </button>
        <div className={styles.wrapper}>
          <div className={styles.wrapp}>
            <div>id = {selectedLocation?.id}</div>
            {inputFieldsArray.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                value={selectedLocation?.[field.name]}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className={styles.wrapp}>
            <LocationPhotos setPopup={setPopup} />
            Координаты: тут будет карта
          </div>
        </div>
      </form>
      {/* Popup */}
      <Popup
        show={popup.show}
        message={popup.message}
        closePopup={closePopup}
      />
    </div>
  )
}

export default AddLocation
