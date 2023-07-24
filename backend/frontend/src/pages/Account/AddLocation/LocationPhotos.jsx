import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  saveImageAndUpdateLocationThunk,
  deleteImageAndUpdateLocationThunk,
} from "../../../redux/reducers/addLocationsReducer"

function LocationPhotos({ setPopup }) {
  const dispatch = useDispatch()

  const selectedLocation = useSelector(
    (state) => state.addLocationsReducer?.selectedLocation
  )
  const photos = useSelector(
    (state) => state.addLocationsReducer?.selectedLocation?.LocationPhotos
  )
  const locationId = useSelector(
    (state) => state.addLocationsReducer?.selectedLocation?.id
  )
  const [imageUrlInput, setImageUrlInput] = useState("")
  const [isLoading, setIsLoading] = useState(false) // добавили стейт

  const handleImageUrlChange = (e) => {
    setImageUrlInput(e.target.value)
  }

  const handleImageUrlSubmit = async () => {
    if (!imageUrlInput) return

    setIsLoading(true)
    try {
      await dispatch(
        saveImageAndUpdateLocationThunk(
          imageUrlInput,
          photos,
          locationId,
          selectedLocation
        )
      )
      setImageUrlInput("")
    } catch (error) {
      console.error("An error occurred:", error)
      setPopup({ show: true, message: `An error occurred: ${error}` })
    } finally {
      setIsLoading(false)
    }
  }

  const handleImageUrlDelete = async (imageUrl, locationId) => {
    setIsLoading(true)
    try {
      await dispatch(deleteImageAndUpdateLocationThunk(imageUrl, locationId))
    } catch (error) {
      console.error("An error occurred:", error)
      setPopup({ show: true, message: `An error occurred: ${error}` })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      фото: <br />
      <input
        type="text"
        value={imageUrlInput}
        onChange={handleImageUrlChange}
      />
      <button type="button" onClick={handleImageUrlSubmit} disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Сохранить"}
      </button>
      {photos?.map((photo, index) => (
        <div key={index}>
          <img src={photo.url} style={{ height: "100px" }} alt="" />
          <button
            type="button"
            onClick={() => handleImageUrlDelete(photo.url, locationId)}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Удалить"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default LocationPhotos
