const router = require('express').Router()
const bcrypt = require('bcrypt')
const db = require('../db/models')

const saltRounds = 10

const logoutHandler = (req, res) => {
  req.session.destroy()
  res.clearCookie('user_sid').status(200).json({
    code: 'clearCookie OK',
    message: 'req.session.destroy()',
  })
}

const signupHandler = async (req, res) => {
  const { username, email, password, role } = req.body
  const itemUser = await db.Admin.findOne({ where: { email } })

  if (itemUser) {
    res.json({
      code: 'ALREADY EXISTS',
      message: 'Пользователь уже существует',
    })
  } else {
    try {
      const encryptedPass = await bcrypt.hash(password, saltRounds)

      const newUser = await db.Admin.create({
        username,
        email,
        password: encryptedPass,
        role,
      })

      req.session.user = newUser

      res.status(201).json({
        code: 'ACCESS OK',
        message: 'Успешная регистрация',
      })
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

const signinHandler = async (req, res) => {
  const { username, password } = req.body

  try {
    const itemUser = await db.Admin.findOne({ where: { username } })

    if (!itemUser) {
      return res.status(401).json({
        code: 'ACCESS ERROR',
        message: 'Ошибка авторизации',
      })
    }

    if (
      password === itemUser.password ||
      (await bcrypt.compare(password, itemUser.password))
    ) {
      req.session.user = itemUser

      return res.status(200).json({
        code: 'ACCESS OK',
        message: 'Доступ разрешён',
      })
    }
    return res.status(401).json({
      code: 'ACCESS ERROR',
      message: 'Ошибка авторизации',
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const checkAuthStatusHandler = (req, res) => {
  if (req.session.user) {
    res.status(200).json({
      code: 'AUTHENTICATED',
      message: 'Пользователь аутентифицирован',
    })
  } else {
    res.status(401).json({
      code: 'NOT_AUTHENTICATED',
      message: 'Пользователь не аутентифицирован',
    })
  }
}

router.route('/logout').get(logoutHandler)
router.route('/signup').post(signupHandler)
router.route('/signin').post(signinHandler)
router.route('/check').get(checkAuthStatusHandler)

module.exports = router
