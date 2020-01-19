exports.up = async knex => knex.schema.createTable('friends', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('firstName').unique().notNullable()
  table.string('lastName').unique().notNullable()

  // the requestor's id
  table.uuid('requestorId')
    .notNullable()
  // refer to the users id to link both
    .references('users.id')
    // deletes the row at the same time. this is important for foreign keys b/c they rely on users.
    // but it gets deleted first so this deletes everything simultanesouly
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  // friendship status
  table.enum('status', ['ACCEPTED', 'DECLINED', 'PENDING'])

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
