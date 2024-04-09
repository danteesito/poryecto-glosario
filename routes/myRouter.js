const express = require('express');
const router = express.Router();
const palabrasController = require('../controllers/myController');

    router.get('/', palabrasController.inicio);
    router.get('/ingles', palabrasController.ingles);ñ
module.exports = router;
