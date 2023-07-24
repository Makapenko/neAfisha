import React from "react"
import styles from "./SubCategory.module.css"
import { useSelector, useDispatch } from "react-redux"
import { checkboxHandleAC } from "../../../redux/actionCreators"
import SubCategoryIcon from "../../../icons/navigation/SubCategoryIcon.jsx"

function SubCategory({ engName, ruName, categoryColor }) {
  const dispatch = useDispatch()

  const isActive = useSelector(
    (store) => store.filterReducer.subcategories[engName]
  )

  const handleCheckbox = () => {
    dispatch(checkboxHandleAC(engName))
  }

  return (
    <div className={styles.subcat} onClick={handleCheckbox}>
      <div className={styles.iconContainer}>
        <SubCategoryIcon categoryColor={categoryColor} isActive={isActive} />
      </div>
      <div className={styles.subcat__name}>{ruName}</div>
    </div>
  )
}

export default SubCategory
