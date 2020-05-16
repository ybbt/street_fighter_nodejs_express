const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// DONE: Implement route controllers for user

//--
router.post('/', function(req, res, next) {
    const result = UserService.saveInRepository(req.body);
    if (result) {
        res.json(result);
    } else {
        res.status(400).send(`Some error`);//! доробити помилку
    }
});
router.put('/:id', function(req, res, next) {
    const result = UserService.updateInRepository(req.params["id"], req.body);
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
    const result = UserService.deleteFromRepository(req.params["id"]);
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
    const result = UserService.search({"id":req.params["id"]});
    if (result) {
        res.json(result);
    } else {
        res.status(400).json({
            error: true,
            message: 'User not found'
        });
    }
});
router.get('/', function(req, res, next) {
    const result = UserService.getAllFromRepository();
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