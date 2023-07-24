import React, { useEffect } from "react"
import styles from "./Popup.module.css"

function Popup({ show, message, closePopup }) {
  useEffect(() => {
    let timer
    if (show) {
      timer = setTimeout(() => {
        closePopup()
      }, 200000)
    }
    return () => clearTimeout(timer)
  }, [show, message, closePopup])

  return show ? <div className={styles.popup}>{message}</div> : null
}

export default Popup
