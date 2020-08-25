const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ownedGameSchema = new Schema({
  object: { type: String }
}, {
  collection: 'owned'
})

const OwnedGame = mongoose.model('OwnedGame', ownedGameSchema)

module.exports = OwnedGame
