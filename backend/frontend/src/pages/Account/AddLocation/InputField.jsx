import React from "react"
import styles from "./AddLocation.module.css"

const InputField = ({ name, value, label, type, handleChange }) => {
  return (
    <div className={styles.input}>
      {label && <label>{label}</label>}
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value || ""}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          className={styles.inputs}
          type={type || "text"}
          name={name}
          value={value || ""}
          onChange={handleChange}
        />
      )}
      <br />
    </div>
  )
}

export default InputField
