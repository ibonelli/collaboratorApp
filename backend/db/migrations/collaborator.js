
exports.up = function(knex, Promise) {
  return knex.schema.createTable('collaborator', t => {
      t.increments('id')
      t.string('name')
      t.string('lastname')
      t.string('country')
      t.string('city')
      t.date('joinedDate')
      t.string('deliveryManager')
      t.string('email')
      t.string('status')
      t.date('exitDate')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('collaborator')
};
