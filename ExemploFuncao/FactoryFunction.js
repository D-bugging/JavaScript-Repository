// factory simples
function criarPessoa()
{
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}
console.log(criarPessoa())

function criarProduto(nome, preco)
{
  return {
    nome,
    preco,
    desconto: 0.1 // valor default
  }
}
console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Tablet', 1200.49))