import * as React from "react"
const ArrowIcon = ({ arrowColor = "#000" }) => (
  <svg
    width={"100%"}
    height={"100%"}
    viewBox="0 0 103 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1={1.5}
      y1={-1.5}
      x2={62.7132}
      y2={-1.5}
      transform="matrix(0.807544 -0.589808 0.557354 0.830275 50.8105 39.8735)"
      stroke={arrowColor}
      strokeWidth={3}
      strokeLinecap="round"
    />
    <line
      x1={1.5}
      y1={-1.5}
      x2={62.7132}
      y2={-1.5}
      transform="matrix(-0.807544 -0.589808 -0.557354 0.830275 51.8555 39.8735)"
      stroke={arrowColor}
      strokeWidth={3}
      strokeLinecap="round"
    />
  </svg>
)
export default ArrowIcon
