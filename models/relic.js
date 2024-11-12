// models/relic.js
const mongoose = require('mongoose');

const relicSchema = mongoose.Schema({
    relic_name: String,
    origin: String,
    age: Number
});

module.exports = mongoose.model('Relic', relicSchema);
