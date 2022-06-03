const express = require('express')
const app = express()

//GET /products/all?page=2&sort=price&order=desc HTTP/1.1
app.get('/products/all',(request, response) => {
    response.send(
       'Products,' + request.query.page + ',' + request.query.sort + ',' + request.query.order
    )
})

//GET /products/8719-small/red HTTP/1.1
app.get('/products/:productId-:size-:color',(request, response) => {
    response.send(
        'Product,' + request.params.productId +
        ',' + request.params.size +
        ',' + request.params.color
    )
})

//GET /products/8719 HTTP/1.1
app.get('/products/:productId',(request, response) => {
    response.send(
        'Product, ' + request.params.productId
        )
})



app.listen(3000)
