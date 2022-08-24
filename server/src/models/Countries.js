const { Schema, model } = require('mongoose')

const country = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    timezone: { type: String, required: true },
    population: { type: Number, required: true },
    location: {
        longitude: { type: Number, required: true },
        latitude: { type: Number, required: true }
    }
})

module.exports = model('Country',country)