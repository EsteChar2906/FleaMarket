import mongoose from 'mongoose';


const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  addres: {
    type: String,
  },
  telephone: {
    type: Number,
  },
  roles: [String],
});

 export default mongoose.model('Users', userschema)


