const db = require('../../db/models')

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params
    const location = await db.Location.findOne({
      where: { id },
      include: [
        {
          model: db.LocationPhoto,
          as: 'LocationPhotos',
        },
      ],
    })

    if (!location) {
      return res.status(404).json({
        code: 'LOCATION_NOT_FOUND',
        message: 'Location not found.',
      })
    }

    return res.status(200).json({
      code: 'LOCATION_FOUND',
      location,
      userId: req?.session?.user?.id,
    })
  } catch (error) {
    console.error(error.stack)
    return res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      message: error.stack,
    })
  }
}

module.exports = getLocationById
