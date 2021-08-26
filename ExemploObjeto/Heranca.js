const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // true


// Prototype chain
Object.prototype.attr4 = 'Z' // Evitar esta forma
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr1) // 'A'
console.log(filho.attr0) // undefined
console.log(filho.attr4) // 'Z'


const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax)
      this.velAtual += delta;
    else
      this.velAtual = this.velMax;
  },
  status() {
    return `${this.velAtual}Km/h`
  }
}
const fiat = {
  modelo: 'Punto',
  velMax: 324 // shadowing
}
const chevrolet = {
  modelo: 'Celta',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(fiat, carro)
Object.setPrototypeOf(chevrolet, carro)

console.log(fiat)
console.log(chevrolet)

chevrolet.acelerarMais(100)
console.log(chevrolet.status())


const mae = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(mae)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(mae, {
  nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}


console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('Flash reverso'.reverse())

Array.prototype.first = function () {
  return this.[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())