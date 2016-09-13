var development = require('./knexfile').development
var knex = require ('knex')(development)

module.exports = {
  getWombles: getWombles
}

function getWombles () {
  return knex('wombles')
    .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
    .select('wombles.name', 'characteristics.description as description')
}

//
//
// .then(function (data) {
//   res.render(data)
// }))
