import * as React from "react"
const MapIcon = ({ color = "#2B2C2E" }) => (
  <svg
    width={45}
    height={45}
    viewBox="0 0 88 98"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58.6667 51.1895H64.7408C68.0184 51.1895 70.9646 53.1888 72.1751 56.2348L85.8231 90.5749C86.8669 93.2011 84.932 96.0522 82.1059 96.0522H44H5.82412C3.017 96.0522 1.08304 93.2363 2.09074 90.6163L15.2825 56.3176C16.4708 53.2281 19.4391 51.1895 22.7493 51.1895H29.3333"
      stroke={color}
      strokeWidth={3}
    />
    <circle
      cx={43.7122}
      cy={24.1565}
      r={11.1536}
      stroke={color}
      strokeWidth={3}
    />
    <path
      d="M67.5197 25.3072C67.5197 38.3649 59.2765 52.3318 43.701 71.5472C28.2206 52.8058 19.9053 38.3616 19.9053 25.3072C19.9053 12.1588 30.5641 1.5 43.7125 1.5C56.8608 1.5 67.5197 12.1588 67.5197 25.3072Z"
      stroke={color}
      strokeWidth={3}
    />
  </svg>
)
export default MapIcon
