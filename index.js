var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var routes = require('./routes')
var path = require('path')

var app = express()


app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
  res.send('WOMBLES!')
})

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})

app.get('/view', routes.getWombles)
//How can I get this info to show with handlebars?
app.get('/assignments', routes.getWombleRubbish)
