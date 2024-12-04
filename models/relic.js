const mongoose = require('mongoose');
const relicSchema = mongoose.Schema({
    relic_name: { 
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 50, 
        trim: true, 
        validate: {
          validator: function(value) {
            return /^[a-zA-Z0-9\s]+$/.test(value);
          },
          message: props => `${props.value} is not valid. The name must contain only letters, numbers, and spaces.`
        }
      },
      
    origin: { 
        type: String, 
        required: true,
        enum: ['India', 'Egypt', 'Greece', 'China', 'Rome', 'Japan'], // Must match one of these values
        trim: true,
        validate: {
            validator: function(value) {
              return /^[A-Z]/.test(value);
            },
            message: props => `${props.value} is not valid. The origin must start with an uppercase letter.`
          }
    },
    estimated_value: { 
        type: Number, 
        required: true,
        min: [100, 'estimated value must be at least 100.'],
       max: [5000000, 'estimated value cannot exceed 5000000.'],
       validate: {
        validator: Number.isInteger,
        message: '{VALUE} is not a valid integer'
      }
    }
});
//const Relic = mongoose.model('Relic', relicSchema);
module.exports = mongoose.model("Relic",relicSchema)