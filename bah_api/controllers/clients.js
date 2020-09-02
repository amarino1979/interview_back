const express = require('express')
const clients = express.Router()
const Client = require('../models/clients')


// Create Route
clients.post('/', async (req, res) => {
    Client.create(req.body, (error, createdClient) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdClient)
    })
})

// Index Route
clients.get('/soldiers', (req, res) => {
    Client.find({}, (err, foundClient) => {
        if (err) {
            res.status(400).json({ error: err. message })
        }
        res.status(200).json(foundClient)
    })
})

// Delete Route
clients.delete('/:id', (req, res) => {
    Client.findByIdAndRemove(req.params.id, (err, deletedClient) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(deletedClient)
    })
})

// Update Route
clients.put('/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedClient) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(updatedClient)
    })
})

module.exports = clients