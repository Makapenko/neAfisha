import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { handleLogout } from "../../redux/reducers/userReducer"
import styles from "./Account.module.css"
import AddEvent from "./AddEvent/AddEvent.jsx"
import AddLocation from "./AddLocation/AddLocation.jsx"

function Account() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.userReducer)

  const [activeTab, setActiveTab] = useState("addLocation")

  const onLogoutClick = () => {
    dispatch(handleLogout())
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />
  }

  const switchTab = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className={styles.container}>
      <button onClick={onLogoutClick}>Выход</button>
      <hr />
      <h2>Профиль админа БД</h2>

      <div className={styles.tabs}>
        <button onClick={() => switchTab("addLocation")}>Добавить место</button>
        <button onClick={() => switchTab("addEvent")}>Добавить событие</button>
      </div>

      {activeTab === "addLocation" && <AddLocation />}
      {activeTab === "addEvent" && <AddEvent />}

      <hr />
    </div>
  )
}

export default Account
