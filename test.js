var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
// var routes = require('./routes')
var db = require('./db')
var path = require('path')

var app = express()


app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})

app.get('/', function (req, res) {
  res.send('WOMBLES!')
})

app.get('/view',  function (req, res) {
  db.getWombles()
    .then(function (wombles) {
      var vm = {
        wombles: wombles
      }
      console.log(vm)
      res.render('list', vm)
    })
    .catch(function (err) {
      console.error(err.message)
      res.status(500).send("Can't display users!")
    })
})

// app.get('/assignments', knex('wombles')
//   .join('rubbish', 'wombles.id', '=', 'rubbish.id')
//   .select('wombles.name', 'rubbish.name as rubbish')
//   .then(function (data) {
//     res.render(data)
//   }))
