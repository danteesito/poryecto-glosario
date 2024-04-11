const express = require('express');
const router = express.Router();
const palabrasController = require('../controllers/myController');

    router.get('/', palabrasController.inicio);

    router.get('/espa', palabrasController.español);

    router.get('/ingles', palabrasController.ingles);

    router.post('/palabras', palabrasController.createPalabra);

module.exports = router;
