const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

app.use(morgan('combined'));

//TODO Config static file
app.use(express.static(path.join(__dirname, 'public')))

//TODO Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//TODO Custom path to view
app.set('views', path.join(__dirname, 'resources/view'))

//TODO redirect to home page
app.get('/', (req, res) => {
  res.render('home')
})

//TODO redirect to login page
app.get('/login', (req, res) => {
  res.render('login')
})

//TODO redirect to search page
app.get('/search', (req, res) => {
  res.render('search')
})

// TODO not found URL 
app.get('*', (req, res) => {
  res.render('404')
})


app.listen(port, () => {
  console.log('Example learn node');
})
