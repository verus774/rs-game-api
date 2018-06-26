const express = require('express');
const router = express.Router();
const spellsRoutes = require('./spells');
const menuRoutes = require('./menu');

router.use('/spells', spellsRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
