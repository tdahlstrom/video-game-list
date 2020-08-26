const router = require('express').Router()
let VideoGame = require('../models/videogame.model')
let vgoc = require('./constructors/videoGameObjectConstructor')

router.route('/').get((req, res) => {
  findObject = vgoc.create(req)

  VideoGame.find(findObject)
    .sort({ name: 1 })
    .skip(parseInt(req.query.skip))
    .limit(parseInt(req.query.limit))
    .then(videogames => res.json(videogames))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/total').get((req, res) => {
  findObject = vgoc.create(req)

  VideoGame.countDocuments(findObject)
    .then(count => res.json(count))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
