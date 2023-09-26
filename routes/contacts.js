const routes = require('express').Router();

const controllers = require('../controllers')

routes.get('/', controllers.getAllContacts)
routes.get('/:id', controllers.getId)

module.exports = routes