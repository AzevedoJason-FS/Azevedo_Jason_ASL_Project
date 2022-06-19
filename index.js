const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const productRouter = require('./routes/Products')
const variantsRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', __dirname + '/templates/views')
app.use('/products', productRouter)
app.use('/variants', variantsRouter)
app.use('/images', imagesRouter)

app.get('/', (req, res) => {
    res.render('home', { message: 'Hello Jason!' })
})

app.listen(3000)
