const express = require('express')
const getAllLocations = require('./getAllLocations.controller')
const getLocationTitles = require('./getLocationTitles.controller')
const getLocationById = require('./getLocationById.controller')
const postLocation = require('./postLocation.controller')
const updateLocation = require('./updateLocation.controller')

const router = express.Router()

router.route('/').get(getAllLocations)
router.route('/titles').get(getLocationTitles)
router.route('/:id').get(getLocationById)
router.route('/').post(postLocation)
router.route('/:id').put(updateLocation)

module.exports = router
