const routes = require('express').Router();

const controllers = require('../controllers')

routes.get('/', controllers.getAllContacts)



module.exports = routes