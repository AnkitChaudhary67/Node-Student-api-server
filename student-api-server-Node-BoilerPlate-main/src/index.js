const express = require('express')
const studentRoute=require('./routes/student')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.use("api/student", studentRoute)


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   