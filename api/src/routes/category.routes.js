import express from "express";
import verifyRole from "../auth/verifyRole.js";
import verifyToken from "../auth/verifyToken.js";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
} from "../controllers/category.controllers.js";

const router = express();

// ruta que crea una nueva categoria
router.post("/category", verifyToken, verifyRole, createCategory);

// ruta que me obtiene todas las categorias
router.get("/category", getAllCategory);

// ruta que elimina una categoria
router.delete("/category/:id", verifyToken, verifyRole, deleteCategory);

export default router;
