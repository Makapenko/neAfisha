const db = require('../../db/models')

// Обработчик PUT запроса
// eslint-disable-next-line consistent-return
const updateLocation = async (req, res) => {
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

  const { id } = req.params

  try {
    const location = await db.Location.findByPk(id)
    if (!location) {
      return res.status(404).json({ message: 'Локация не найдена' })
    }

    await location.update({
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
          const photo = await db.LocationPhoto.findOne({
            where: { LocationId: id, url: link },
          })
          if (!photo) {
            await db.LocationPhoto.create({
              LocationId: id,
              url: link,
            })
          }
        }
      }),
    )

    res.status(200).json({
      code: 'LOCATION UPDATED',
      message: 'Локация обновлена',
    })
  } catch (error) {
    console.log(error.message)

    res.status(500).json({
      message: 'Ошибка обновления в БД',
      error: error.message,
    })
  }
}

module.exports = updateLocation
