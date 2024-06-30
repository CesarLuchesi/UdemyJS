const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contactController = require('./src/controllers/contactController')

route.get('/', homeController.homePage)
route.post('/', homeController.formPost)
route.get('/contato', contactController.contactPage)

module.exports = route