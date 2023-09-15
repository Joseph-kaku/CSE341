const routes = require('express').Router();

const controllers = require('../controllers')

routes.get('/', controllers.nameFunction)

module.exports = routes