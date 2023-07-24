const express = require('express')

const uploadImage = require('./uploadImage.controller')
const deleteImage = require('./deleteImage.controller')

const router = express.Router()

router.post('/', uploadImage)
router.delete('/', deleteImage)

module.exports = router
