const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));


const controllers = require('../controllers')

routes.get('/', controllers.getAll)
routes.get('/:id', controllers.getSingle)

routes.post('/', controllers.createContact)

routes.put('/:id', controllers.updateContact)

routes.delete('/:id', controllers.deleteContact)

module.exports = routes