exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('email').unique().notNullable()
  table.string('firstName').unique().notNullable()
  table.string('lastName').unique().notNullable()
  table.text('bio')
  table.date('dob')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
