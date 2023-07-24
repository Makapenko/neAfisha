import * as React from "react"
const SubCategoryIcon = ({ categoryColor, isActive }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={2.38477}
      y={1.5}
      width={41.1002}
      height={43}
      rx={16.5}
      stroke={categoryColor}
      strokeWidth={3}
    />
    {isActive ? (
      <rect
        x={7.5957}
        y={7}
        width={30.6784}
        height={32}
        rx={12}
        fill={categoryColor}
      />
    ) : null}
  </svg>
)
export default SubCategoryIcon
