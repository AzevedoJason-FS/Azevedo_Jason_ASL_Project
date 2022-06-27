const express = require('express')
const router = express.Router()
const mainCtrl = require('../controllers/Main')

router.get('/', mainCtrl.index)
router.get('/products/:slug', mainCtrl.show)

module.exports = router