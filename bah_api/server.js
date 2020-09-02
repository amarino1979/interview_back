// Dependencies //
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
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

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        }else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions))
// Router Controller //
const clientsController = require('./controllers/clients.js')
app.use('/clients', clientsController)


// Listener //
app.listen(port, () => {
    console.log('listening on port', port)
})