const path = require('path')
const route = require('./routes')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

// app.use(morgan('combined'));

//TODO Config static file
app.use(express.static(path.join(__dirname, 'public')))

//TODO Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//TODO Custom path to view
app.set('views', path.join(__dirname, 'resources/view'))

//TODO get middleware
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//TODO config router
route(app)

app.listen(port, () => {
  console.log('Example learn node');
})
