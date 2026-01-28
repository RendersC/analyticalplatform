const mongoose = require('mongoose');


const MeasurementSchema = new mongoose.Schema({
timestamp: { type: Date, required: true },
field1: Number,
field2: Number,
field3: Number
});


module.exports = mongoose.model('Measurement', MeasurementSchema);