import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  goatMitraId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'GoatMitra',
    required:true
  },
  goatId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Goat',
    required:true
  },
  visitDate:{
    type:Date,
    required:true
  },
  height:{
    type: Number,
    required:true
  },
  weight:{
    type: Number,
    required:true
  },
  disease: [
    { type: String },
  ],
});

const Visit = mongoose.model('Visit', visitSchema);

export default Visit;