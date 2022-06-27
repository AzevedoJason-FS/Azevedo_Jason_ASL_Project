const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mainRouter = require('./routes/Main')
const productRouter = require('./routes/Products')
const variantsRouter = require('./routes/Variants')
const imagesRouter = require('./routes/Images')
const fileUpload = require('express-fileupload')

app.use(fileUpload())
app.use("/public", express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug')
app.set('views', __dirname + '/templates/views')
app.use('/main', mainRouter)
app.use('/products', productRouter)
app.use('/variants', variantsRouter)
app.use('/images', imagesRouter)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)
