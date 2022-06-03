const express = require('express')
const app = express()

//GET / HTTP/1.1
app.get('/', (request, response) => {
    response.send('Home Page GET')
})

// POST / HTTP/1.1
app.post('/', (request, response) => {
    response.send('Home Page Second Route')
})

// GET /products/nike-large-white-shoe HTTP/1.1
app.get('/products/:productName', (request, response) => {
    response.send('Product Page, Product Name: ' + request.params.productName)
})

// GET /products/683-nike-large-white-shoe HTTP/1.1
app.get('/products/:productId-:productName', (request, response) => {
    response.send(
        'Product Page, Product Name: ' + request.params.productName +
        'Product ID: ' + request.params.productId
        )
})

app.listen(3000)
