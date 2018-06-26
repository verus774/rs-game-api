const express = require('express');
const router = express.Router();
const spells = require('../../controllers/spellsController');

router.get('/', spells.list);

module.exports = router;
