import mongoose from 'mongoose';

const goatSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  dob: {
    type: Date,
    required: true
  },
  vaccinationDate: {
    type: Date,
  },
  visits : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Visit'
  }],
});

const Goat = mongoose.model('Goat', goatSchema);

export default Goat;
