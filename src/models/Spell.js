const spells = require('../data/spells');

exports.getAll = async () => {
    return Promise.resolve(spells);
};
