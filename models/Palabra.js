const mongoose = require('mongoose');

const palabraSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
});

const Palabra = mongoose.model('Palabra', palabraSchema);

module.exports = Palabra;
