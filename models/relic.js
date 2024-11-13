// models/relic.js
const mongoose = require('mongoose');

const relicSchema = mongoose.Schema({
    relic_name: { type: String, required: true },
    origin: { type: String, required: true },
    estimated_value: { type: Number, required: true }
});

module.exports = mongoose.model('Relic', relicSchema);
module.exports = Relic;