const mongoose = require('mongoose')

const Client = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    city: {type: String},
    state: {type: String},
    image: {data: Buffer, contentType: String},
    rank: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Client', Client)