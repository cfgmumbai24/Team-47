import mongoose from 'mongoose';
import bycrypt from 'bcryptjs';


const goatMitraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
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

goatMitraSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

goatMitraSchema.methods.matchPasswords = async function (password) {
  return await bycrypt.compare(password, this.password);
}



const goatMitra = mongoose.model('GoatMitra', goatMitraSchema);

export default goatMitra;