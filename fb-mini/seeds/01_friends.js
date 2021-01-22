const friendData = require('../data/friend')

exports.seed = knex => knex('friend').del()
  .then(() => knex('friend').insert(friendData))

module.exports = friends