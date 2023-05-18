const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Notes extends Model {
  static get tableName() {
    return 'notes';
  }

  static get relationMappings() {
      const Collaborator = require('./Collaborator')
      return {
          collaborator: {
              relation: Model.BelongsToOneRelation,
              modelClass: Collaborator,
              join: {
                  from: 'notes.collaborator_id',
                  to: 'collaborator.id'
              }
          }
      }
  }
}

module.exports = Notes;