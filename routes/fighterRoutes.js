const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// DONE: Implement route controllers for fighter

//--
router.post('/', function(req, res, next) {
    const result = FighterService.saveInRepository(req.body);
    if (result) {
        res.json(result);
    } else {
        res.status(400).send(`Some error`);//! доробити помилку
    }
});
router.put('/:id', function(req, res, next) {
    const result = FighterService.updateInRepository(req.params["id"], req.body);
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({
            error: true,
            message: 'Some error'
        });//! доробити помилку
    }
});
router.delete('/:id', function(req, res, next) {
    const result = FighterService.deleteFromRepository(req.params["id"]);
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({
            error: true,
            message: 'Some error'
        });//! доробити помилку
    }
});
router.get('/:id', function(req, res, next) {
    const result = FighterService.searchInRepository({"id":req.params["id"]});
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({
            error: true,
            message: 'Fighter not found'
        });
    }
});
router.get('/', function(req, res, next) {
    const result = FighterService.getAllFromRepository();
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({
            error: true,
            message: 'Some error'
        });//! доробити помилку
    }
});
//--

module.exports = router;