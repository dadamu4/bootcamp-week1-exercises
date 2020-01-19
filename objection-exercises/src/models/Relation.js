// Write your relation model here!

const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')

class Relations extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      parent: {
        // specify how they are related
        relation: BelongsToOneRelation,
        modelClass: User,
        // specfiy how they are joined
        join: {
          from: 'relations.parentId',
          to: 'users.id',
        },
      },

      child: {
        // specify how they are related
        relation: BelongsToOneRelation,
        modelClass: User,
        // specfiy how they are joined
        join: {
          from: 'relations.childId',
          to: 'users.id',

        },
      },
    }
  }
}

module.exports = Relations
