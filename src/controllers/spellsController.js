const Spell = require('../models/Spell');

exports.list = async (req, res) => {
    try {
        const spells = await Spell.getAll();
        return res.json(spells);
    } catch (e) {
        return res.status(500).json({
            status: 'error',
        });
    }
};
