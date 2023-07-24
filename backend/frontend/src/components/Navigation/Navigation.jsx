import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css"

import FilterIcon from "../../icons/navigation/FilterIcon.jsx"
import CardListIcon from "../../icons/navigation/CardListIcon.jsx"
import MapIcon from "../../icons/navigation/MapIcon.jsx"
import FavoritesIcon from "../../icons/navigation/FavoritesIcon.jsx"

const navButtons = [
  { path: "/", iconName: "filter", IconComponent: FilterIcon },
  { path: "/events", iconName: "cardList", IconComponent: CardListIcon },
  { path: "/map", iconName: "map", IconComponent: MapIcon },
  { path: "/favorites", iconName: "favorites", IconComponent: FavoritesIcon },
]

function Navigation() {
  const nav = useSelector((store) => store.navigationReducer.navigation)

  return (
    <nav className={styles.nav}>
      <div className={styles.border__top}></div>
      <div className={styles.lineOfButtons}>
        {navButtons.map(({ path, iconName, IconComponent }) => (
          <div className={styles.buttonContainer} key={path}>
            <NavLink to={path}>
              <div className={styles.button}>
                <IconComponent color={nav === iconName ? "#FFF" : "#2B2C2E"} />
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
