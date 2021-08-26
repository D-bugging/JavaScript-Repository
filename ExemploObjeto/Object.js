// Usando a notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc)
{
  this.nome = nome // Torna a variavel publica
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas)
{
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

// Objeto constante
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// Vai dar erro se tentar atribuir outro endereco de memoria para a const
// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// Transforma o objeto em constante
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)


// Funcoes importantes
const pessoaI = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}
console.log(Object.keys(pessoaI))
console.log(Object.values(pessoaI))
console.log(Object.entries(pessoaI))

Object.entries(pessoaI).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})
// Destructuring
Object.entries(pessoaI).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoaI, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})
pessoaI.dataNascimento = '01/01/2017'
console.log(pessoaI.dataNascimento)
console.log(Object.keys(pessoaI))