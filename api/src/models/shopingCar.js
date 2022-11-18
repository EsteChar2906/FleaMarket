import mongoose, { Schema } from "mongoose";
import users from "./users.js";
import products from "./products.js";

const carSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: users
    },
    products: {
      type: Array,
      require: true
    }
  }
);

export default mongoose.model("ShopingCar", carSchema);
