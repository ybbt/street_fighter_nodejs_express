const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', /* AuthService.login,  */(req, res, next) => {
    try {
        // DONE: Implement login action (get the user if it exist with entered credentials)
        const data = AuthService.login(req.body);
        // res.data = data;
        res.status(200).json(data);
    } catch (err) {
        // res.err = err;
        res.status(400).send({
            "error": true,
            "message": err.message
        })
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;