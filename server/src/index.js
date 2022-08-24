require('./database')
const app = require('./server')

app.listen(app.get('port'))

console.log('Server running on Port', app.get('port'))