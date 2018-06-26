const spells = require('../data/spells');
const os = require('os');

exports.getAll = async () => {
    return Promise.resolve(spells.map((spell) => {
        spell.img = os.hostname() + '/' + spell.img;
        return spell;
    }));
};
