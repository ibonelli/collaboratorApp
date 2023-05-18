const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

const Collaborator = require('../models/Collaborator')

router.get('/collaborator', (req, res) => {
    Collaborator.query()
        .then(collaborator => {
            res.json(collaborator)
        })
})

router.get('/collaborator/:id', (req, res) => {
    let id = parseInt(req.params.id)
    Collaborator.query()
        .where('id', id)
        .then(collaborator => {
            res.json(collaborator)
        })
})

module.exports = {
    router: router
}
