const moduloA = require('../../ModuleA')
console.log(moduloA.ola)

// Modulo core
const http = require('http')
http.createServer((req, res) => {
  res.write('Good Morning!')
  res.end()
}).listen(8080)