const mongoose = require('mongoose');
const Goat= require('./goat');
const GoatMitra=require('./goatMitra')

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
    type: Float32Array,
    required:true
  },
  weight:{
    type:Float32Array,
    required:true
  },
  disease: [
    { type: String },
  ],
});

const Visit = mongoose.model('Visit', visitSchema);
module.exports = Visit;