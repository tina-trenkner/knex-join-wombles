var db = require('./db')

module.exports = {
  getWombles: getWombles,
  getWombleRubbish: getWombleRubbish
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

function getWombleRubbish (req, res) {
    db.getWombleRubbish()
    .then(sendRubbish)
    .catch(sendError)

    function sendRubbish (rubbish) {
      res.send(rubbish)
    }

    function sendError (err) {
      console.error(err.message)
      res.status(500).send("That womble needs a rubbish task")
    }
}
