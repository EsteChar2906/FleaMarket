import ShopingCar from "../models/shopingCar.js";
import products from "../models/products.js";

export const findOrCreate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const found = await ShopingCar.find({ user: userId });
    if (found.length === 0) {
      const newcar = ShopingCar({ "user": userId });
      await newcar.save();
      //return res.send("creado")
    }
    //return res.send("encontrado")    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

export const PushProduct = async (req, res) => {
  try {
    const product = await products.findById(req.body.productId);
    await ShopingCar.updateOne(
      { user: req.params.userId },
      { $addToSet: { products: product } }
    );
    return res.send("product in shoping car");

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await products.findById(req.body.productId);
    await ShopingCar.updateOne(
      { user: req.params.userId },
      { $pull: { products: product } }
    );
    return res.send("producto eliminado");

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};