const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice)
{
  console.log(`${indice + 1}, ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
  console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas)
{
  if (notas[i] < 7)
    notasBaixas1.push(notas[i]);
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
  return nota < 7
})
console.log(notasBaixas2)

// Com callback e arrow function
const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)

// Callback no browser
document.getElementsByTagName('body')[0].onclick = function (e)
{
  alert('O evento ocorreu!')
}