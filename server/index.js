const express = require('express')
const app = express()

app.use(express.json())

const controller = require('./controller')
var port = 5001


app.listen(port, ()=> console.log(`listening on port ${port}`))