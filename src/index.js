const path = require('path')
const route = require('./routes')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const db = require('./config/db')
const app = express()
const port = 3000


// app.use(morgan('combined'));

//* Config static file
app.use(express.static(path.join(__dirname, 'public')))

//* Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//* Custom path to view
app.set('views', path.join(__dirname, 'resources/view'))

//! Get middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//! Config router
route(app)

//! Connect db
db.connect()

app.listen(port, () => {
  console.log('Example learn node');
})
