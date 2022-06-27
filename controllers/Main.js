const { Product, Variant, Image } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll({
		include: [
			{ model: Variant, include: [Image] }
		]
	})
	res.render('main/index', { products })
}

const show = async (req, res) => {
	const product = await Product.findOne({ 
		where: { slug: req.params.slug },
		include: [
			{ model: Variant, include: [Image] }
		]
	})

	let variant = product.Variants[0]

	if (req.query.variant) {
		variant = product.Variants.find(variant => variant.slug === req.query.variant)
	}

	res.render('main/show', { product, variant })
}

module.exports = { index, show }