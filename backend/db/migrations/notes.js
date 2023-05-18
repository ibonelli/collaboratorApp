
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', t => {
      t.increments('id')
      t.string('content')
      t.integer('collaborator_id').references('id').inTable('collaborator')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
