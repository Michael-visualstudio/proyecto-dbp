const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const server = express()

server.set('port', process.env.PORT || 4000)

server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.use('/api/countries', require('./routes/countries.routes'))

module.exports = server