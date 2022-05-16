#! /usr/bin/env node

const http = require('node:http')

const hostname = '0.0.0.0'
const port = 8080

const server = http.createServer((request, response) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Here I am. Rock you like a hurricane!')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
