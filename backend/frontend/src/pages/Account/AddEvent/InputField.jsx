import React from "react"
import styles from "./AddEvent.module.css"

const InputField = ({ name, value, label, type, handleChange }) => {
  let inputElement

  if (type === "textarea") {
    inputElement = (
      <textarea
        name={name}
        value={value || ""}
        onChange={handleChange}
      ></textarea>
    )
  } else if (type === "select") {
    inputElement = (
      <select name={name} value={value || ""} onChange={handleChange}>
        <option value="Лекции">Обучение - Лекции</option>
        <option value="Другое">Обучение - Другое</option>
        <option value="Мастер-классы">Обучение - Мастер-классы</option>
        <option value="Танцевальные">Вечеринки - Танцевальные</option>
        <option value="Концерты">Вечеринки - Концерты</option>
        <option value="18 +">Вечеринки - 18 +</option>
        <option value="Кинопоказы">Бары - Кинопоказы</option>
        <option value="Лекции">Бары - Лекции</option>
        <option value="Дегустации">Бары - Дегустации</option>
      </select>
    )
  } else {
    inputElement = (
      <input
        className={styles.inputs}
        type={type || "text"}
        name={name}
        value={value || ""}
        onChange={handleChange}
      />
    )
  }

  return (
    <div className={styles.input}>
      {label && <label>{label}</label>}
      {inputElement}
      <br /> <br />
    </div>
  )
}

export default InputField
