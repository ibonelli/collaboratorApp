const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Collaborator extends Model {
  static get tableName() {
    return 'collaborator';
  }

  static get relationMappings() {
      const Notes = require('./Notes')
      return {
          notes: {
              relation: Model.HasManyRelation,
              modelClass: Notes,
              join: {
                  from: 'collaborator.id',
                  to: 'notes.collaborator_id'
              }
          }
      }
  }
}

module.exports = Collaborator;