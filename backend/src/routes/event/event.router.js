const express = require('express')
const getEventsByLocationId = require('./getEventsByLocationId.controller')

const router = express.Router()

router.route('/location/:id').get(getEventsByLocationId)
// router.route('/').get(getAllEvents);
// router.route('/').post(postEvent);
// router.route('/:id').put(updateEvent);
// router.route('/:id').delete(deleteEvent);

module.exports = router
