// Функция для создания настроек запроса
// Принимает URL, метод (GET, POST, etc.) и тело запроса (если есть)
const createRequest = (url, method, body = null) => {
  // Общие опции для каждого запроса
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  }

  // Если есть тело запроса, добавляем его в опции
  if (body) {
    options.body = JSON.stringify(body)
  }

  // Создаем новый объект запроса с заданным URL и опциями
  return new Request(`${process.env.REACT_APP_SERVER_URL}${url}`, options)
}

// Функция для получения списка мест
// Отправляет GET-запрос на сервер и возвращает промис с данными о местах
export const fetchLocations = () =>
  fetch(createRequest("/location/titles", "GET")).then((response) =>
    response.json()
  )

// Функция для получения информации о выбранном месте
// Принимает ID места, отправляет GET-запрос на сервер и возвращает промис с данными о месте
export const fetchSelectedLocation = (locationId) =>
  fetch(createRequest(`/location/${locationId}`, "GET")).then((response) =>
    response.json()
  )

// Функция для добавления нового места
// Принимает данные о месте, отправляет POST-запрос на сервер
export const addLocation = (locationData) =>
  fetch(createRequest("/location", "POST", locationData))

// Функция для изменения места
// Принимает id и данные о месте, отправляет PUT-запрос на сервер
export const updateLocation = (locationId, locationData) =>
  fetch(createRequest(`/location/${locationId}`, "PUT", locationData))

// Функция для проверки статуса аутентификации пользователя
// Отправляет GET-запрос на сервер, возвращает промис с булевым значением, указывающим на статус аутентификации пользователя
export const checkAuthenticationStatus = () =>
  fetch(createRequest("/auth/check", "GET"))
    .then((response) => response.json())
    .then((data) => data.isAuthenticated)
    .catch((err) => {
      console.error(err)
      // В случае ошибки возвращаем false
      return false
    })

export const fetchAllData = () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/`, {
    credentials: "include",
  }).then((response) => response.json())

export const logout = () =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, {
    credentials: "include",
  })

// Функция для входа в систему
export const login = (username, password) =>
  fetch(`${process.env.REACT_APP_SERVER_URL}/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => response.json())

export const signup = (username, email, password, role) =>
  fetch(
    createRequest("/auth/signup", "POST", { username, email, password, role })
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))

// Функция для сохранения изображения на сервере
// Отправляет POST-запрос на сервер с URL изображения в теле запроса
export const saveImage = (imageUrl) =>
  fetch(createRequest("/image", "POST", { imageUrl })).then((response) =>
    response.json()
  )

// Функция для удаления изображения с Яндекс Клауда и из БД
export const deleteImage = (imageUrl) =>
  fetch(createRequest("/image", "DELETE", { imageUrl })).then((response) =>
    response.json()
  )

// Получение всех event в локации
export const fetchEventsByLocationId = (locationId) =>
  fetch(createRequest(`/event/location/${locationId}`, "GET")).then(
    (response) => response.json()
  )
