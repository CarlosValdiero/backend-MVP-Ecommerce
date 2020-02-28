const { Color, Product, VarietyProduct, SizeQuantity } = require('../models');

module.exports = {
	async index(req, res) {
		const { product_id } = req.params;

		var variety = await VarietyProduct.findAll({
			include: [
				{
					attributes: ['id', 'name', 'description'],
					model: Product
				},
				{
					attributes: ['id', 'name', 'cod'],
					model: Color
				}
			],
			where: {
				product_id
			}
		});

		return res.json(variety);
	},

	async show(req, res) {
		const { variety_id } = req.params;
		const variety = await VarietyProduct.findByPk(variety_id, {
			include: [
				{
					attributes: ['name', 'description'],
					model: Product
				},
				{
					attributes: ['id', 'size', 'quantity'],
					model: SizeQuantity
				},
				{
					attributes: ['id', 'name', 'cod'],
					model: Color
				}
			]
		});

		return res.json(variety);
	},

	async store(req, res) {
		const { code, color_id, price } = req.body;
		const { filename } = req.file;
		const { product_id } = req.params;
		const variety = await VarietyProduct.create({
			code,
			price,
			photo: filename,
			product_id,
			color_id
		});

		return res.json(variety);
	},

	async update(req, res) {
		const { variety_id } = req.params;
		const { code, color_id, price } = req.body;

		await VarietyProduct.update(
			{
				code,
				color_id,
				price
			},
			{
				where: {
					id: variety_id
				}
			}
		);

		const variety = await VarietyProduct.findByPk(variety_id);

		return res.json(variety);
	}
};
