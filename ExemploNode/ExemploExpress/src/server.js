const port = 3003

const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const database = require('./database')

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get('/products', (req, res, next) => {
  //res.send({ name: 'Notebook', price: 123.45 }) // Converter para JSON
  res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next) => {
  res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
  const product = database.saveProduct({
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // JSON
})

app.put('/products/:id', (req, res, next) => {
  const product = database.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // JSON
})

app.delete('/products/:id', (req, res, next) => {
  const product = database.deleteProduct(req.params.id)
  res.send(product) // JSON
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})