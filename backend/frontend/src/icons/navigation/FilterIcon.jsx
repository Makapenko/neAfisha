import * as React from "react"
const SVGComponent = ({ color = "#2B2C2E" }) => (
  <svg
    width={45}
    height={45}
    viewBox="0 0 105 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={52.5} cy={32.5} r={31} stroke={color} strokeWidth={3} />
    <circle cx={32.5} cy={65.5} r={31} stroke={color} strokeWidth={3} />
    <circle cx={72.5} cy={65.5} r={31} stroke={color} strokeWidth={3} />
  </svg>
)
export default SVGComponent
