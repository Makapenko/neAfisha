import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App/App.jsx"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

const rootElement = document.getElementById("root")
createRoot(rootElement).render(
  <>
    <App />
  </>
)

serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
