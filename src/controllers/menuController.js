const Menu = require('../models/Menu');

exports.list = async (req, res) => {
    try {
        let menu = await Menu.getAll();
        menu = menu.map((menuItem) => {
            menuItem.img = `${req.hostname}/${menuItem.img}`;
            return menuItem;
        });
        return res.json(menu);
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            status: 'error',
        });
    }
};
