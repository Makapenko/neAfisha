import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { checkAuthenticationStatusThunk } from "../../redux/reducers/userReducer"

const AuthStatusChecker = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthenticationStatusThunk())
  }, [dispatch])

  return null
}

export default AuthStatusChecker
