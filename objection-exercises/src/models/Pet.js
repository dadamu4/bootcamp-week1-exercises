// Write your Pet model here!

const { BelongsToOneRelation } = require('objection') // import belong to one relation because one pet can only belong to one user
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      users: {
        // specify how they are related (they have many relations)
        relation: BelongsToOneRelation,
        modelClass: User,
        // specfiy how they are joined
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Pet
