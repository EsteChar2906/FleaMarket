import mongoose, { Schema } from 'mongoose';
import Users from './users.js';

const productschema = new mongoose.Schema(
  {
    name: {
      type: String,
      requerid: true,
      trim: true,
    },
    category: {
      type: String,
      requerid: true,
    },
    stock: {
      type: Number,
      requerid: true,
      min: [1, "At least one product is needed to publish it"],
    },
    description: {
      type: String,
      maxlength: 500,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      url: String,
    },
    condition: {
      type: String,
      enum: ["Nuevo", "Usado"],
    },
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Users,
    },
  },
  {
    query: {
      byName(name) {
        return this.where({ name: new RegExp(name, "i") });
      },
    },
  }
);

export default  mongoose.model('Products', productschema)