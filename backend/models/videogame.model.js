const mongoose = require('mongoose')

const Schema = mongoose.Schema

const videogameSchema = new Schema({
  name: { type: String },
  platform: { type: Schema.Types.Mixed },
  year_of_release: { type: Schema.Types.Mixed },
  genre: { type: String },
  publisher: { type: String },
  na_sales: { type: Number },
  eu_sales: { type: Number },
  jp_sales: { type: Number },
  other_sales: { type: Number },
  global_sales: { type: Number },
  critic_score: { type: Number },
  critic_count: { type: Number },
  user_score: { type: Number },
  user_count: { type: Number },
  developer: { type: String },
  rating: { type: String }
}, {
  collection: 'video_games'
})

const VideoGame = mongoose.model('VideoGame', videogameSchema)

module.exports = VideoGame
