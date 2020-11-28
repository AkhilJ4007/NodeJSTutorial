const http = require('http')
const routes = require('./routes-assignment')

const server = http.createServer(routes)

server.listen(3001)

