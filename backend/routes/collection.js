const router = require('express').Router()
const mongoose = require('mongoose')
let VideoGame = require('../models/videogame.model')
let OwnedGame = require('../models/ownedGame.model')

router.route('/').get((req, res) => {
  let ownedGameObjects = []
  let findObject = {}

  OwnedGame.find()
    .then(ownedGames => {
      ownedGames.forEach(game => ownedGameObjects.push(mongoose.Types.ObjectId(game.object)))

      findObject = {
        _id: { $in: ownedGameObjects },
        name: { $regex: new RegExp('^' + req.query.char, 'i') },
      }

      if (req.query.platform === "2600") {
        findObject.platform = 2600
      } else if(req.query.platform !== "") {
        findObject.platform = req.query.platform
      }

      if(req.query.year_of_release === "") {
        findObject.year_of_release = req.query.year_of_release
      } else if(req.query.year_of_release !== "none") {
        findObject.year_of_release = parseInt(req.query.year_of_release)
      }

      if(req.query.genre !== "none") {
        findObject.genre = req.query.genre
      }

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

      findObject = {
        _id: { $in: ownedGameObjects },
        name: { $regex: new RegExp('^' + req.query.char, 'i') },
      }

      if (req.query.platform === "2600") {
        findObject.platform = 2600
      } else if(req.query.platform !== "") {
        findObject.platform = req.query.platform
      }

      if(req.query.year_of_release === "") {
        findObject.year_of_release = req.query.year_of_release
      } else if(req.query.year_of_release !== "none") {
        findObject.year_of_release = parseInt(req.query.year_of_release)
      }

      if(req.query.genre !== "none") {
        findObject.genre = req.query.genre
      }

      VideoGame.countDocuments(findObject)
        .then(count => res.json(count))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router