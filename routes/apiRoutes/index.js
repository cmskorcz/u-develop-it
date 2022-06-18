const router = require('express').Router();
const candidateRoutes = require('./candidateRoutes');
const partyRoutes = require('./partyRoutes');
const voterRoutes = require('./voterRoutes');
const voteRoutes = require('../apiRoutes/voteRoutes')

router.use(candidateRoutes);
router.use(partyRoutes);
router.use(voterRoutes);
router.use(voteRoutes);

module.exports = router;