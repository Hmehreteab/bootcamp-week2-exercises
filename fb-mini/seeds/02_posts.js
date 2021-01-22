const postData = require('../data/post')

exports.seed = knex => knex('post').del()
  .then(() => knex('post').insert(postData))

module.exports = posts