import mongoose from 'mongoose';


const roleschema = new mongoose.Schema(
  {
    name: {type: String,}
  }

);

export default  mongoose.model('Role', roleschema)