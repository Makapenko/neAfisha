import React, { useState } from "react"
import styles from "./Category.module.css"
import ArrowIcon from "../../../icons/navigation/ArrowIcon.jsx"
import SubCategory from "../SubCategory/SubCategory.jsx"
import Icon from "../Icon/Icon.jsx"

function Category({
  categoryName,
  subCategories,
  CategoryIcon,
  categoryColor,
}) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const toggleAccordion = () => {
    setAccordionOpen((prevState) => !prevState)
  }

  const arrowClass = accordionOpen
    ? styles.category__arrow
    : styles.category__arrow_open

  return (
    <>
      <div
        className={styles.category}
        style={{ border: `2px solid ${categoryColor}` }}
      >
        <div className={styles.category__left}>
          <Icon
            subCategories={subCategories}
            CategoryIcon={CategoryIcon}
            categoryColor={categoryColor}
          />
          <div
            className={styles.category__name}
            onClick={toggleAccordion}
            style={{ color: `${categoryColor}` }}
          >
            {categoryName}
          </div>
        </div>
        <div onClick={toggleAccordion} className={arrowClass}>
          <ArrowIcon arrowColor={categoryColor} />
        </div>
      </div>
      {accordionOpen && (
        <div className={styles.subcats__container}>
          <div className={styles.subcats}>
            {subCategories.map(({ engName, ruName }) => (
              <SubCategory
                key={engName}
                engName={engName}
                ruName={ruName}
                categoryColor={categoryColor}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Category
