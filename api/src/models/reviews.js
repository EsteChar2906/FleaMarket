import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    star: {
      type: Number,
      requerid: true,
    },
    comment: {
      type: String,
      requerid: true
    },
  }
)

export default  mongoose.model('Review', reviewSchema);