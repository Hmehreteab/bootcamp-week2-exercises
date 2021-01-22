const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  User.query().withGraphFetched('pets')

  // Get all users, their pets, AND their children
  User.query().withGraphFetched('[pets, children]')

  // Get all users, their parents, and their grandparents
  User.query().select('children.children')

  // Get all users, their pets, their chilren, and their childrens' pets
  User.query().select('children[children, posts]')

  // -----
  cleanup()
}

run()
