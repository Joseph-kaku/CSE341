const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 8080

app.use('/', require('./routes/contacts'))

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});