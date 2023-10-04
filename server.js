const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser');
const mongodb = require("./DB/connect")

mongodb.initDb(Error);

const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use('/', require('./routes/contacts'))

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
});

