const menu = require('../data/menu');

exports.getAll = async () => {
    return Promise.resolve(menu);
};
