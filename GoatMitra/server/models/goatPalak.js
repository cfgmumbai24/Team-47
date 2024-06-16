import mongoose from 'mongoose';


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
  goats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goat'
  }]
});


const GoatPalak = mongoose.model('GoatPalak', goatPalakSchema);

export default GoatPalak;