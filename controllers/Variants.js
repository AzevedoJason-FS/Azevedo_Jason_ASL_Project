const { Variant, Product } = require('../models')

const index = async (req, res) => {
    const variants = await Variant.findAll()
    res.render('variants/index', { variants })   
}

const form = async (req, res) => {
    const products = await Product.findAll()
    if(req.params.id){
        const variants = await Variant.findByPk(req.params.id)
        res.render('variants/edit', { variants, products })
    } else {
        res.render('variants/create', { products })
    }
}

const show = async (req, res) => {
    const variants = await Variant.findByPk(req.params.id)
    const product = await variants.getProduct()
    res.render('variants/show', { variants, product })
}

const create = async (req, res) => {
    const variants = await Variant.create(req.body)
    res.redirect('variants/' + variants.id)
}

const update = async (req, res) => {
    const variants = await Variant.update(req.body,{
        where: { id: req.params.id }
    })
    res.redirect('/variants/' + req.params.id)
}

const remove = async (req, res) => {
    const variants = await Variant.destroy({ where: { id: req.params.id }})
    res.redirect('/variants')
}

module.exports = { index,form,show,create,update,remove }