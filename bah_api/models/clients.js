const mongoose = require('mongoose')

const Client = mongoose.Schema({
    name: {type: String, required: true},
    rank: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Client', Client)