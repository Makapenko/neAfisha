import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAndInitializeAllData } from "../../redux/reducers/eventsReducer"

function LoadFromBackend() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAndInitializeAllData())
  }, [dispatch])

  return null
}

export default LoadFromBackend
