import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
} from "../controllers/category.controllers.js";
import { verifyToken,  verifyAdminRole } from "../middleware/auth.middlewares.js";

const router = express();

// ruta que crea una nueva categoria
router.post("/category", [verifyToken, verifyAdminRole], createCategory);

// ruta que me obtiene todas las categorias
router.get("/category", getAllCategory);

// ruta que elimina una categoria
router.delete("/category/:id",  [verifyToken, verifyAdminRole], deleteCategory);

export default router;
