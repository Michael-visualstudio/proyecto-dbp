const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/countries')
.then(db=>console.log(db+'is conected'))
.catch(err => console.log(err))