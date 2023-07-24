import React from "react"
import { Link } from "react-router-dom"
import Event from "../../pages/CardList/Event"

import { useSelector, useDispatch } from "react-redux"

import style from "../../pages/CardList/CardList.module.css"
// для кнопок навигации
import { changeActiveNavigationButtonAC } from "../../redux/reducers/navigationReducer"

function Favorites() {
  // для кнопок навигации
  const dispatch = useDispatch()
  dispatch(changeActiveNavigationButtonAC("favorites"))

  const { events } = useSelector((store) => store.eventsReducer)
  const favorites = useSelector((store) => store.favoriteReducer)

  return (
    <div>
      <Link to="/addEventAndPlace">
        <li className="margin-1 padding-1">Добавить Событие</li>
      </Link>
      {events ? (
        <div className={style.cardlist}>
          {events.map((event) => {
            if (favorites.indexOf(event.id) >= 0) {
              // console.log("должно работать");
              return (
                <div>
                  <Event key={event.id} event={event} />
                </div>
              )
            }
          })}
        </div>
      ) : (
        <p>упс</p>
      )}
    </div>
  )
}

export default Favorites
