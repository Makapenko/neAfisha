import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

function PlaceInfo() {
  const { id } = useParams()
  const { places } = useSelector((store) => store.eventsReducer.places)
  const place = places[id - 1]
  const navigate = useNavigate()
  return (
    <div className="flex column jus-center align-center">
      <h2>{place.title}</h2>
      <p>{place.title}</p>
      <p>{place.address}</p>
      <p>{place.type}</p>
      <img src={place.urlImg1} alt="" />
      <button onClick={() => navigate(-1)} className="margin2 padding2">
        Назад
      </button>
    </div>
  )
}

export default PlaceInfo
