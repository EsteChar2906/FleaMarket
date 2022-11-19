import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controllers.js";
import {  verifyAdminRole, verifyToken } from "../middleware/auth.middlewares.js";

const router = express();

// ruta para crear un producto
// ruta protegida por el token (solo el user puede crear un producto)
router.post("/product", verifyToken, createProduct);

// ruta que me trae todos los productos con su usuario y su categoria
// Tambien me bsuca por title del producto (query), utilizando la misma ruta con el query: http://localhost:3001/api/products?name=
router.get("/products", getAllProducts);

// ruta que me trae el detalle de un producto, incluyendo, user y category
router.get("/product/:id", getProductById);

// Route para actualizar un producto
// ruta protegida por el token (solo el user puede actualizar un producto)
router.put("/product/:id",  [verifyToken, verifyAdminRole],  updateProduct);

// Route para eliminar un producto por id
// ruta protegida por el token (solo el user puede eliminar un producto)
router.delete("/product/:id",  [verifyToken, verifyAdminRole], deleteProduct);

export default router;
