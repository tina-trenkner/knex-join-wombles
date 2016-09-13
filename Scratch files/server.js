var development = require('./knexfile').development
var knex = require('knex')(development)

//US - join from characteristics id

knex('wombles')
  .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
  .select('wombles.name', 'characteristics.description as description')
  .then(function (data) {
    res.render(data)
  })


//US - join from rubiish id

knex('wombles')
  .join('rubbish', 'wombles.id', '=', 'rubbish.id')
  .select('wombles.name', 'rubbish.name as rubbish')
  .then(function (data) {
    res.render(data)
  })


//US - inse new womble

knex.insert({
  name: 'Daisy',
  characteristic_id: 4
})
.into('wombles')
.then(knex.destroy)
.catch(displayError)


//delete a womble

knex.del ({
  characteristic_id:2
})

knex('wombles')
.where('characteristic_id', '=', '2')
.del()
.then(knex.destroy)
.catch(displayError)


//update a womble characteristic

knex('wombles')
.where('characteristic_id', '=', '4')
.update({
  characteristic_id: '5'
})
.then(knex.destroy)
.catch(displayError)
