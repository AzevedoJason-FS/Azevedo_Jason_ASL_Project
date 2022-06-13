const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const productRouter = require('./routes/Products')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', __dirname + '/templates/views')
app.use('/products', productRouter)

app.get('/', (req, res) => {
    res.render('home', { message: 'Hello Jason!' })
})

app.listen(3000)
