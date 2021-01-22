// Write your Pet model here!

const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }

    static get relationMappings() {
        return {
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

module.exports = Pet