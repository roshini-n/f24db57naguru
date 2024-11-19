const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const relicSchema = new Schema({
    relic_name: { type: String, required: true },
    origin: { type: String, required: true },
    estimated_value: { type: Number, required: true }
});
//const Relic = mongoose.model('Relic', relicSchema);
module.exports = mongoose.model("Relic",relicSchema)