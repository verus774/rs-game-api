const Spell = require('../models/Spell');

exports.list = async (req, res) => {
    try {
        let spells = await Spell.getAll();
        spells = spells.map((spell) => {
            spell.img = `${req.hostname}/${spell.img}`;
            return spell;
        });
        return res.json(spells);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            status: 'error',
        });
    }
};
