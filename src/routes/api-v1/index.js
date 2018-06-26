const express = require('express');
const router = express.Router();
const spellsRoutes = require('./spells');

router.use('/spells', spellsRoutes);

module.exports = router;
