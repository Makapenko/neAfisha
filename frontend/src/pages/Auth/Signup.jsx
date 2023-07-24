import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { isAuthenticatedAC } from "../../redux/reducers/userReducer"

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function signupHandler(e) {
    e.preventDefault()
    const { username, email, password, role } = e.target

    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            role: role.value,
          }),
        }
      )

      const data = await response.json()

      if (data.code === "ACCESS OK") {
        alert(data.message)
        localStorage.setItem("isAuthenticated", "true")
        dispatch(isAuthenticatedAC(true))
        navigate("/account")
      } else {
        alert(data.message)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={signupHandler}>
        <input type="text" name="username" placeholder="username" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <br />
        <select name="role">
          <option value="admin">admin</option>
          <option value="other">other</option>
        </select>
        <br />
        <br />
        <button type="submit">Sign up</button>
      </form>

      <br />
      <br />
      <hr />
      <Link to="/auth">Авторизоваться</Link>
    </div>
  )
}

export default Signup
