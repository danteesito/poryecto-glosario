const mongoose = require('mongoose');

const palabraSchema = new mongoose.Schema({
  palabra: { type: String, required: true },
});

const Palabra = mongoose.model('Palabra', palabraSchema);

module.exports = Palabra;
