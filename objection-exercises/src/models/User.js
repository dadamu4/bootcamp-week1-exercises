const { HasManyRelation } = require('objection') // import has many relations because one user can have many pets
const { ManyToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['fullName']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }


  static get relationMappings() {
    const Pet = require('./Pet')

    return {
      pets: {
        // specify how they are related (they have many relations)
        relation: HasManyRelation, // has many relations returns an array
        modelClass: Pet,
        // specfiy how they are joined
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },

      parents: {
        // specify how they are related
        relation: ManyToManyRelation,
        modelClass: User,
        // specfiy how they are joined
        join: {
          from: 'users.id',
          // use through when it's a many to many relation
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },

      children: {
        // specify how they are related
        relation: ManyToManyRelation,
        modelClass: User,
        // specfiy how they are joined
        join: {
          from: 'users.id',
          // use through when it's a many to many relation
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',

        },
      },
    }
  }
}

module.exports = User
