const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));


const controllers = require('../controllers')

routes.get('/', controllers.getAllContacts)
routes.get('/:id', controllers.getId)

routes.post('/', controllers.addNewContact)

routes.put('/update', controllers.updateContact)

routes.delete('/delete', controllers.deleteContact)

module.exports = routes