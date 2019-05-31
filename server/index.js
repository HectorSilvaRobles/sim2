require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()

app.use(express.json())

const {getHouse, addHouse} = require('./controller')
const {CONNECTION_STRING} = process.env
var port = 5001

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Just connected to Database')
})


app.get('/api/gethouse', getHouse)
app.post('/api/addhouse', addHouse)

app.listen(port, ()=> console.log(`listening on port ${port}`))