import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import styles from "./Filters.module.css"
import Category from "./Category/Category.jsx"

import { changeActiveNavigationButtonAC } from "../../redux/reducers/navigationReducer"
import { CategoryArray } from "./ArrOfCategoriesTest"

function Filters() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeActiveNavigationButtonAC("filter"))
  }, [dispatch])

  const renderCategories = CategoryArray.map((category) => (
    <Category
      key={category.categoryName}
      categoryName={category.categoryName}
      categoryColor={category.categoryColor}
      CategoryIcon={category.CategoryIcon}
      subCategories={category.subCategories}
    />
  ))

  return <div className={styles.container}>{renderCategories}</div>
}

export default Filters
