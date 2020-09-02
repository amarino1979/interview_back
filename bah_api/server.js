// Dependencies //
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const port = 3000


// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

mongoose.connect('mongodb://localhost:27017/clients', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})

// middleware
app.use(express.json()) //use .json(), not urlencoded()

// Router Controller //
const clientsController = require('./controllers/clients.js')
app.use('/clients', clientsController)


// Listener //
app.listen(port, () => {
    console.log('listening on port', port)
})