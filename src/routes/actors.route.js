const { Router } = require('express');

const actorsController = require('../controllers/actors.controller');

const router = Router();

router.get('/marvel-actors', actorsController.getAllMarvelActors);

router.get('/marvel-actors-multiple-characters', actorsController.getAllMarvelActorsMultipleCharacters);

module.exports = router;
