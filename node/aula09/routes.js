const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contactController = require('./controllers/contactController')

route.get('/', homeController.homePage)
route.post('/', homeController.formPost)
route.get('/contato', contactController.contactPage)

module.exports = route