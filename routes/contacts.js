const routes = require('express').Router();

const controllers = require('../controllers')

routes.get('/', controllers.getAllContacts)
routes.get('/:id', controllers.getId)

routes.post('/', controllers.addNewContact)

routes.put('/update', controllers.updateContact)

routes.delete('/delete', controllers.deleteContact)

module.exports = routes