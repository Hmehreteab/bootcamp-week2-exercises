// Write your relation model here!
const BaseModel = require('./BaseModel')

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