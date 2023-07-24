import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  checkboxHandleOnAC,
  checkboxHandleOffAC,
} from "../../../redux/actionCreators"
import styles from "./Icon.module.css"

function Icon({ CategoryIcon, categoryColor, subCategories }) {
  const dispatch = useDispatch()

  const [iconActive, setIconActive] = useState(false)
  const allSubcategories = useSelector(
    (store) => store.filterReducer.subcategories
  )

  useEffect(() => {
    const isAnySubcategoryActive = subCategories.some(
      (subcat) => allSubcategories[subcat.engName]
    )
    setIconActive(isAnySubcategoryActive)
  }, [allSubcategories, subCategories])

  const handleAllCheckboxes = () => {
    const actionCreator = iconActive ? checkboxHandleOffAC : checkboxHandleOnAC

    subCategories.forEach((subcat) => {
      dispatch(actionCreator(subcat.engName))
    })
  }

  const lineColor = iconActive ? "#fff" : categoryColor
  const fillColor = iconActive ? categoryColor : "none"

  return (
    <div className={styles.category__img} onClick={handleAllCheckboxes}>
      <CategoryIcon lineColor={lineColor} fillColor={fillColor} />
    </div>
  )
}

export default Icon
