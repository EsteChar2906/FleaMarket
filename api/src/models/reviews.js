const mongoose = require('mongoose');

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