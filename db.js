var development = require('./knexfile').development
var knex = require ('knex')(development)

module.exports = {
  getWombles: getWombles,
  getWombleRubbish: getWombleRubbish
}

function getWombles () {
  return knex('wombles')
    .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
    .select('wombles.name', 'characteristics.description as description')
}

function getWombleRubbish () {
  return knex('wombles')
    .join('rubbish', 'wombles.id', '=', 'rubbish.id')
    .select('wombles.name', 'rubbish.name as rubbish')
}
