const mongoose = require('mongoose');
const Goat= require('./goat');
const GoatMitra=require('./goatMitra')

const visitSchema = new mongoose.Schema({
  goatMitraId:{
    type:String,
    ref:'GoatMitra',
    required:true
  },
  goatId:{
    type:Number,
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
  disease: {
    type: String,
  },
});

const Visit = mongoose.model('Visit', visitSchema);
module.exports = Visit;