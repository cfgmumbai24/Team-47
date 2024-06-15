const mongoose = require('mongoose');

const goatMitraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }
});

const goatMitra = mongoose.model('GoatMitra', goatMitraSchema);

module.exports = goatMitra;