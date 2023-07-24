const db = require('../../db/models')

// Обработчик POST запроса
const postLocation = async (req, res) => {
  const {
    title,
    description,
    address,
    type,
    coordX,
    coordY,
    site,
    vk,
    fb,
    instagram,
    whatsapp,
    telegram,
    viber,
    email,
    tel1,
    tel2,
    url,
  } = req.body

  let newLocation = null

  try {
    newLocation = await db.Location.create({
      title,
      description,
      address,
      type,
      coordX: Number(coordX),
      coordY: Number(coordY),
      site,
      vk,
      fb,
      instagram,
      whatsapp,
      telegram,
      viber,
      email,
      tel1,
      tel2,
    })

    await Promise.all(
      url.map(async (link) => {
        if (link !== '') {
          await db.LocationPhoto.create({
            LocationId: newLocation.id,
            url: link,
          })
        }
      }),
    )

    res.status(200).json({
      code: 'LOCATION SAVED',
      message: 'Локация добавлена в БД',
    })
  } catch (error) {
    console.log(error.message)

    res.status(500).json({
      message: 'Ошибка записи в БД',
      error: error.message,
    })
  }
}

module.exports = postLocation
