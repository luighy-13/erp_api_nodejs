'use strict'

const express = require('express')

const app = express() // Settings

app.set('port', process.env.PORT || 3000) // Middlewares

app.use(express.json()) // Routes

app.use(require('./users.routes.js')) // Starting the server

app.listen(app.get('port'), function () {
  console.log('Server on port '.concat(app.get('port')))
})
