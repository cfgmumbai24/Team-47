const mongoose = require('mongoose');

const goatPalakSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique:true
  },
  area: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  goatPalakId:{
    type: Number,
    required: true,
    unique:true
  }
});

const GoatPalak = mongoose.model('GoatPalak', goatPalakSchema);

module.exports = GoatPalak;