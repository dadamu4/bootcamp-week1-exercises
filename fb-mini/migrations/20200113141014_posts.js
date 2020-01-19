
exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  // the post's input/text
  table
    .text('text')
    .notNullable()

  // the posts id
  table.uuid('ownerId')
    .notNullable()
    // refer to the users id to link both
    .references('users.id')
    // deletes the row at the same time. this is important for foreign keys
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  // post likes
  table
    .integer('likes')
    .defaultTo(0)

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
