const db = require('../../db/models')

const getAllLocations = async (req, res) => {
  const locations = await db.Location.findAll()
  res.status(200).json({
    code: 'LOCATIONS_RETRIEVED',
    locations,
    userId: req?.session?.user?.id,
  })
}

module.exports = getAllLocations
