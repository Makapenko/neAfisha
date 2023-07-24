import * as React from "react"
const CheckboxIcon = ({ isActive }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={1.5}
      y={1.5}
      width={67}
      height={67}
      rx={18.5}
      stroke="#958CF7"
      strokeWidth={3}
    />
    {isActive ? (
      <rect
        x={11}
        y={10.6523}
        width={48.6957}
        height={48.6957}
        rx={10}
        fill="#958CF7"
      />
    ) : null}
  </svg>
)
export default CheckboxIcon
