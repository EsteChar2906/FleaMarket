import Products from "../models/products.js";

export const createProduct = async (req, res) => {
  try {
    const newProduct = Products(req.body);
    await newProduct.save();
    return res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const productsQuery = await Products.find({
        title: { $regex: name, $options: "i" },
      })
        .populate("user")
        .populate("category")
        .exec();
      return res.status(200).json(productsQuery);
    } else {
      const products = await Products.find()
        .populate("user")
        .populate("category")
        .exec();
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const found = await Products.findById(id)
      .populate("user")
      .populate("category");
    if (found) {
      return res.json(found);
    } else {
      return res.status(500).send("No se encontraron datos");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, stock, description, price, image, condition, brand, ram, processor, battery, bluetooth } =
      req.body;
    await Products.updateOne(
      { _id: id },
      { $set: { name, category, stock, description, price, image, condition, brand, ram, processor, battery, bluetooth } }
    );
    res.status(200).send("Producto actualizado!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    await Products.deleteOne({ _id: id });
    res.status(200).send("Producto removido!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
