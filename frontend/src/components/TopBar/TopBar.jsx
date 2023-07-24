import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styles from "./TopBar.module.css"
import {
  setDateTodayOnAC,
  setDateTodayOffAC,
  toggleDatePickerAC,
  toggleFreePickerAC,
} from "../../redux/reducers/dateReducer"
import CalendarIcon from "./icons/CalendarIcon.jsx"
import CheckboxIcon from "./icons/CheckboxIcon.jsx"
import DatePickerComponent from "./DatePickerComponent.jsx"

function TopBar() {
  const dispatch = useDispatch()
  const isDatePickerOpen = useSelector(
    (state) => state.dateReducer.isDatePickerOpen
  )
  const isFree = useSelector((state) => state.dateReducer?.isFree)
  const selectedDate = useSelector((state) => state.dateReducer?.selectedDate)

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}.${month}.${year}`
  }

  const isToday = (date) => {
    const today = new Date()
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    )
  }

  function isFreeHandler() {
    dispatch(toggleFreePickerAC())
  }

  function todayHandler() {
    if (selectedDate && isToday(selectedDate)) {
      dispatch(setDateTodayOffAC())
    } else {
      dispatch(setDateTodayOnAC(new Date()))
    }
  }

  const handleCalendarIconClick = () => {
    dispatch(toggleDatePickerAC())
  }

  return (
    <div className={styles.topBar}>
      <div className={styles.checkboxes}>
        <div className={styles.checkboxContainer} onClick={isFreeHandler}>
          <div className={styles.iconContainer}>
            <CheckboxIcon isActive={isFree} />
          </div>
          <p className={styles.checkboxName}>Бесплатно</p>
        </div>
        <div className={styles.separator}> </div>
        <div className={styles.checkboxContainer} onClick={todayHandler}>
          <div className={styles.iconContainer}>
            <CheckboxIcon isActive={selectedDate && isToday(selectedDate)} />
          </div>
          <p className={styles.checkboxName}>Сегодня</p>
        </div>
      </div>
      <div className={styles.dateAndCalendar}>
        <p className={styles.date}>
          {selectedDate ? formatDate(selectedDate) : null}
        </p>
        <div
          className={styles.calendarIconContainer}
          onClick={handleCalendarIconClick}
        >
          <CalendarIcon />
        </div>
        <div className={styles.calendar}>
          {isDatePickerOpen && <DatePickerComponent />}
        </div>
      </div>
    </div>
  )
}

export default TopBar
