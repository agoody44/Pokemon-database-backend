const Favorite = require('../models/favorite');

module.exports = {
  create,
};

async function create(req, res) {
  console.log(req.user);
  try {
    await Favorite.create(req.body);
    favoritePokemons(req, res);
  } catch (err) {
    res.json({err});
  }
}

async function favoritePokemons(req, res) {
  const favorites = await Favorite.find({})
  res.json(favorites);
}