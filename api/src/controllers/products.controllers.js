import Products from "../models/products.js";
import Category from "../models/category.js";

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

      let page = parseInt(req.query.page) - 1 || 0;
      let limit;
      let condition = req.query.condition || "";
      let category = req.query.category || "All";
      let name = req.query.name || "";
      let sort = req.query.sort || "";

      const findCategories = await Category.find()
      
      let allCategories = findCategories.map((c) => c.name)
      
      category === "All"? category = [...allCategories] : category = req.query.category.split(",").toString();

      req.query.category === "All" ? limit = 9 : limit = 31;
      
      let sortBy = {};
      if(sort === "asc"){
        sortBy["price"] = 1;
      }
      if(sort === "desc") {
        sortBy["price"] = -1;
      }
      
      const products = await Products.find({ title: {$regex: name, $options: 'i'}, condition: {$regex:condition, $options: 'i'} })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit)
      .populate('user')
      .populate({
        path: 'category',
        match: { name: category }
      })
      .exec();

      const categoryProducts = products.filter((p) => p.category !== null);

      const filterProducts = category !== "All" ? categoryProducts : products;

      const total = await Products.countDocuments({
        title: {$regex: name, $options: "i"},
        condition: {$regex: condition, $options: "i"}
      })
      .populate({
        path: 'category',
        match: {name: category}
      })
      .exec();

      const result = {
        total,
        page: page + 1,
        limit,
        filterProducts
      }

      return res.status(200).json(result);

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
