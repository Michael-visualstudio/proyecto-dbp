const { Router } = require('express')
const router = Router()

const countriesController = require('../controllers/countries.controller.js')

//CRUD | CREATE - READ - UPDATE - DELETE
router.get('/', countriesController.getCountries)

router.get('/:id', countriesController.getCountry)

router.post('/', countriesController.createCountries)

router.put('/:id', countriesController.updateCountries)

router.delete('/:id', countriesController.deleteCountries)

module.exports = router