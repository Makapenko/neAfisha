import * as React from "react"
const OtherIcon = ({ lineColor = "#C06F41", fillColor = "#fff" }) => (
  <svg
    width={"100%"}
    height={"100%"}
    viewBox="0 0 132 132"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="132" height="132" rx="35" fill={fillColor} />

    <circle
      r={13}
      transform="matrix(-1 0 0 1 102.5 66.5)"
      stroke={lineColor}
      strokeWidth={3}
    />
    <circle
      r={13}
      transform="matrix(-1 0 0 1 65.5 66.5)"
      stroke={lineColor}
      strokeWidth={3}
    />
    <circle
      r={13}
      transform="matrix(-1 0 0 1 28.5 66.5)"
      stroke={lineColor}
      strokeWidth={3}
    />
  </svg>
)
export default OtherIcon
