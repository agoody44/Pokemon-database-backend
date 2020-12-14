const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    name: String,
    // numGuesses: Number,
    // seconds: Number
  }, {
    timestamps: true
  });
  

  favoritesSchema.pre('save', function (next) {
    this.name = this.name;
    next();
  });
  
  module.exports = mongoose.model('Favorite', favoriteSchema);