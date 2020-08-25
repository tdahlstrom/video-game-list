const router = require('express').Router()
let OwnedGame = require('../models/ownedGame.model')

router.route('/').get((req, res) => {
  OwnedGame.find()
    .then(ownedGames => res.json(ownedGames))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const ownedGame = new OwnedGame({
    object: req.query.object
  })

  ownedGame.save()
    .then(() => res.json('Game added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:object').delete((req, res) => {
  let ownedGame = {
    object: req.params.object
  }

  OwnedGame.deleteOne(ownedGame)
    .then(() => res.json('Game deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})
module.exports = router
