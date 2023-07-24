const db = require('../../db/models')

const getLocationTitles = async (req, res) => {
  const locations = await db.Location.findAll({
    attributes: ['id', 'title'],
    order: [['id', 'ASC']], // Сортировка по возрастанию
  })

  res.status(200).json({
    code: 'LOCATION_TITLES_RETRIEVED',
    locations,
    userId: req?.session?.user?.id,
  })
}

module.exports = getLocationTitles
