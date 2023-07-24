import React from "react"
import { useSelector, useDispatch } from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import {
  setDateCalendarAC,
  toggleDatePickerAC,
} from "../../redux/reducers/dateReducer"

function DatePickerComponent() {
  const dispatch = useDispatch()
  const selectedDate = useSelector(
    (state) => state.dateReducer?.dateFromCalendar
  )

  const onChange = (date) => {
    dispatch(setDateCalendarAC(date))
    dispatch(toggleDatePickerAC())
  }

  return <DatePicker selected={selectedDate} onChange={onChange} inline />
}

export default DatePickerComponent
