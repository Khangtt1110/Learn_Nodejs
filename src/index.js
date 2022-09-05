const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'));

//TODO Template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

//TODO Custom path to view
app.set('views', path.join(__dirname, 'resources/view'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log('Example learn node');
})
