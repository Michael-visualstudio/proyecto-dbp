const Country = require('../models/Countries')

const getCountries = async (req, res) => {
    const countries = await Country.find()
    res.json(countries)
}

const getCountry = async (req, res) => {
    const country = await Country.findById(req.params.id)
    res.send(country)
}

const createCountries = async (req, res) => {
    const newCountry = new Country(req.body)
    await newCountry.save()
    res.send({message: 'Country created succesfully', data:{newCountry}})
}

const updateCountries = async (req, res) => {
    await Country.findByIdAndUpdate(req.params.id, req.body)
    res.send({message:'Country has been updated succesfully'})
}

const deleteCountries = async (req, res) => {
    await Country.findByIdAndDelete(req.params.id)
    res.send({message: 'Country has been deleted'})
}

module.exports = {getCountries, getCountry, createCountries, updateCountries, deleteCountries}