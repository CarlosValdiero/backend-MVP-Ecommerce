const { Type } = require('../models');

module.exports = {
	async index(req, res) {
		const types = await Type.findAll();

		return res.json(types);
	},

	async store(req, res) {
		const { name } = req.body;
		const type = await Type.create({
			name
		});

		return res.json(type);
	},

	async delete(req, res) {
		const { type_id } = req.params;

		await Type.destroy({
			where: {
				id: type_id
			}
		});

		return res.json({ ok: 'true' });
	}
};
