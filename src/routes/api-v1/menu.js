const express = require('express');
const router = express.Router();
const menu = require('../../controllers/menuController');

router.get('/', menu.list);

module.exports = router;
