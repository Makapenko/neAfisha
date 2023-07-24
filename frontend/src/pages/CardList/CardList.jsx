import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"

import Event from "./Event"
import style from "./CardList.module.css"

import { changeActiveNavigationButtonAC } from "../../redux/reducers/navigationReducer"

function CardList() {
  const dispatch = useDispatch()

  const { events } = useSelector((store) => store.eventsReducer)

  useEffect(() => {
    dispatch(changeActiveNavigationButtonAC("cardList"))
  }, [dispatch])

  return (
    <>
      {events ? (
        <div className={style.cardlist}>
          {events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p>упс</p>
      )}
    </>
  )
}

export default CardList
