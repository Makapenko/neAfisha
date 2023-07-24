import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { handleSignup } from "../../redux/reducers/userReducer"

function Auth() {
  const { isAuthenticated } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signupHandler = async (e) => {
    e.preventDefault()
    const { username, email, password, role } = e.target
    dispatch(
      handleSignup(username.value, email.value, password.value, role.value)
    )
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/account")
    }
  }, [isAuthenticated, navigate])

  return (
    <div>
      <h1>Пожалуйста, авторизуйтесь</h1>

      <form onSubmit={signupHandler}>
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <br />

        <button type="submit">Sign in</button>
      </form>

      <br />
      <hr />
      <Link to="/signup">Регистрация нового пользователя</Link>
    </div>
  )
}

export default Auth
