import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"

import Navigation from "../components/Navigation/Navigation.jsx"

import Filters from "../pages/Filters/Filters.jsx"
import CardList from "../pages/CardList/CardList.jsx"
import EventInfo from "../pages/CardList/EventInfo.jsx"
import YandexMap from "../components/YandexMap/YandexMap"
import Favorites from "../components/Favorites/Favorites"
import PlaceInfo from "../components/Places/PlaceInfo"
import Places from "../components/Places/Places"
import Auth from "../pages/Auth/Auth"
import Signup from "../pages/Auth/Signup"
import Account from "../pages/Account/Account.jsx"
import AuthStatusChecker from "../components/AuthStatusChecker/AuthStatusChecker"
import TopBar from "../components/TopBar/TopBar"
import LoadFromBackend from "../components/LoadFromBackend/LoadFromBackend"

function AppRoutes() {
  const location = useLocation()

  const shouldRenderTopBar = () => {
    const excludedRoutes = ["/signup", "/auth", "/account"]
    return !excludedRoutes.includes(location.pathname)
  }

  return (
    <>
      <LoadFromBackend />
      {shouldRenderTopBar() && <TopBar />}
      {shouldRenderTopBar() && <Navigation />}
      <AuthStatusChecker />
      <Routes>
        <Route path="/" element={<Filters />} />
        <Route path="/events/place/:id" element={<PlaceInfo />} />
        <Route path="/events/:id" element={<EventInfo />} />
        <Route path="/events" element={<CardList />} />
        <Route path="/places" element={<Places />} />
        <Route path="/map" element={<YandexMap />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  )
}

export default AppRoutes
