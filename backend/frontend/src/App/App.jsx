import React from "react"

import styles from "./App.module.css"

import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../redux/store.js"
import AppRoutes from "./AppRoutes.jsx"

function App() {
  return (
    <div className={styles.app}>
      <Provider store={store}>
        <Router>
          <AppRoutes />
        </Router>
      </Provider>
    </div>
  )
}

export default App
