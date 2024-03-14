const express = require('express')
const { userController } = require('../Controllers')
const routes = express.Router()

routes.post('/register', userController.addUser)
routes.get('/register', userController.getRegister)
routes.post('/login', userController.getLogin)
routes.get('/login', userController.getLoginPage)

module.exports = routes