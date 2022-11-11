import mongoose from 'mongoose';


const categoryschema = new mongoose.Schema(
  {
    name: {type: String,}
  }

);

export default  mongoose.model('Category', categoryschema)