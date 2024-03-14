const { bookController } = require('../Controllers')
const express = require('express')
const routes = express.Router()

routes.post('/add', bookController.addBook)
routes.get('/get', bookController.getBook)
routes.delete('/delete/:id', bookController.deleteBook)

module.exports = routes