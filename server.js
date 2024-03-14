require('dotenv').config()
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const route = require('./Routes')
const connectdb = require('./db/db')
const app = express()

//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//view engine
app.set('view engine', 'ejs')

//routes
app.use('/v1', route)

// db connection
connectdb()

// server
http.createServer(app).listen(process.env.PORT, () => {
    console.log('server start')
})