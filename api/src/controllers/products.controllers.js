import Products from "../models/products.js";
import Category from "../models/category.js";
import Users from "../models/users.js";
import { uploadImage, deleteImage } from "../cloudinary/cloudinary.js";
import fs from "fs-extra";


export const createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      description,
      image,
      rating,
      stock,
      condition,
      user,
      category,
      brand,
      ram,
      processor,
      battery,
      bluetooth,
    } = req.body;

    const newProduct = new Products({
      title,
      price,
      description,
      image,
      rating,
      stock,
      condition,
      user,
      category,
      brand,
      ram,
      processor,
      battery,
      bluetooth,
    });
    // si llega una url guardala en cloudinary
   
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
   
      newProduct.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    }

    //si ya se guardo eliminala del direcotrio local
    await fs.unlink(req.files.image.tempFilePath);

    if (category) {
      const findCategory = await Category.find({ name: { $in: category } });
      newProduct.category = findCategory.map((c) => c._id);
    }

    if (user) {
      const findUser = await Users.find({ email: { $in: user } });
      newProduct.user = findUser.map((p) => p._id);
    }
    const saveProduct = await newProduct.save();

    return res.json(saveProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductsDashboard = async (req, res) => {
  try {
    const allProducts = await Products.find().populate("category");
    return res.json(allProducts);
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

    const findCategories = await Category.find();

    let allCategories = findCategories.map((c) => c.name);

    category === "All"
      ? (category = [...allCategories])
      : (category = req.query.category.split(",").toString());

    req.query.category === "All" ? (limit = 10) : (limit = 31);

    let sortBy = {};
    if (sort === "asc") {
      sortBy["price"] = 1;
    }
    if (sort === "desc") {
      sortBy["price"] = -1;
    }

    const products = await Products.find({
      title: { $regex: name, $options: "i" },
      condition: { $regex: condition, $options: "i" },
    })
      .sort(sortBy)
      .skip(page * limit)
      .limit(limit)
      .populate("user")
      .populate({
        path: "category",
        match: { name: category },
      })
      .exec();

    const categoryProducts = products.filter((p) => p.category !== null);

    const filterProducts = category !== "All" ? categoryProducts : products;

    const total = await Products.countDocuments({
      title: { $regex: name, $options: "i" },
      condition: { $regex: condition, $options: "i" },
    })
      .populate({
        path: "category",
        match: { name: category },
      })
      .exec();

    const result = {
      total,
      page: page + 1,
      limit,
      filterProducts,
    };

    if (result.filterProducts.length === 0) {
      const nameProducts = await Products.find({
        title: { $regex: name, $options: "i" },
      });
      if (!nameProducts) {
        res.status(400).json({
          message:
            "En el momento no existen productos con la categoria seleccionada",
        });
      } else {
        res.status(400).json({
          message:
            "No se encontro ningun producto con la descripcion de la busqueda",
        });
      }
    } else {
      res.status(200).json(result);
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
    const updateOneProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updateOneProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    
    const eliminateProduct = await Products.findByIdAndDelete(req.params.id);
    // sino existe manda un msj
    if (!eliminateProduct) {
      return res.status(404).json({ message: "producto no existe" });
    }
    // si existe elimina el id q tiene la imagen del producto en cloudinary
    await deleteImage(eliminateProduct.image.public_id);

    return res.json('producto eliminado')
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
