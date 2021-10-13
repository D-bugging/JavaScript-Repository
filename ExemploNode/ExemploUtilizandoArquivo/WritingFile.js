const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!')
}) // JSON.stringfy(Object) Objeto para string