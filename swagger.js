const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'cse341-a2oa.onrender.com',
  schemes: ['https'],
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);