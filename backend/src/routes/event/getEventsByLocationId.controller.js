const db = require('../../db/models')

const getEventsByLocationId = async (req, res) => {
  try {
    const { id } = req.params

    const events = await db.Event.findAll({
      where: {
        LocationId: id,
      },
    })

    if (!events) {
      return res
        .status(404)
        .json({ error: 'No events found for this location' })
    }

    return res.status(200).json(events)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'An error occurred while retrieving events' })
  }
}

module.exports = getEventsByLocationId
