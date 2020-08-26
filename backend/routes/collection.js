const router = require('express').Router()
const mongoose = require('mongoose')
let VideoGame = require('../models/videogame.model')
let OwnedGame = require('../models/ownedGame.model')
let ogoc = require('./constructors/ownedGameObjectConstructor')

router.route('/').get((req, res) => {
  let ownedGameObjects = []
  let findObject = {}

  OwnedGame.find()
    .then(ownedGames => {
      ownedGames.forEach(game => ownedGameObjects.push(mongoose.Types.ObjectId(game.object)))

      findObject = ogoc.create(req, ownedGameObjects)

      VideoGame.find(findObject)
        .sort({ name: 1 })
        .skip(parseInt(req.query.skip))
        .limit(parseInt(req.query.limit))
        .then(games => res.json(games))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/total').get((req, res) => {
  let ownedGameObjects = []
  let findObject = {}

  OwnedGame.find()
    .then(ownedGames => {
      ownedGames.forEach(game => ownedGameObjects.push(mongoose.Types.ObjectId(game.object)))

      findObject = ogoc.create(req, ownedGameObjects)

      VideoGame.countDocuments(findObject)
        .then(count => res.json(count))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
