const fs = require('fs') // Modulo core do node para arquivos

const caminho = __dirname + '/file.json' // __dirname diretorio atual

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo) // JSON.parse() passa conteudo de texto para objeto
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

// ler diretorio
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta')
  console.log(arquivos)
})