const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      // added
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId'
        },
      },
    }
  }
}

module.exports = User
