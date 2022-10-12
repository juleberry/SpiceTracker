const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config();
require('./config/database');

// set dev port to 3001
const port = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))

// body parser
app.use(express.json())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// ---------
// API and other Routes go here
// ---------

// if Express route not recognized, React will deal with the route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// app listening
app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})