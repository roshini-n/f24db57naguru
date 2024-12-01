const mongoose = require('mongoose');
const relicSchema = mongoose.Schema({
    relic_name: { type: String, required: true },
    origin: { type: String, required: true },
    estimated_value: { 
        type: Number, 
        required: true,
        min: [100, 'estimated value must be at least 100.'],
       max: [5000000, 'estimated value cannot exceed 5000000.']
    }
});
//const Relic = mongoose.model('Relic', relicSchema);
module.exports = mongoose.model("Relic",relicSchema)