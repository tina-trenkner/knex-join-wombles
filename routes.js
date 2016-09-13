var db = require('./db')

module.exports = {
  getWombles: getWombles
}

function getWombles (req, res) {
  db.getWombles()
    .then(sendWombles)
    .catch(sendError)

  function sendWombles (wombles) {
    res.send(wombles)
  }

  function sendError (err) {
    console.error(err.message)
    res.status(500).send("Couldn't get those wombles!")
  }
}
