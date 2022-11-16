import express from "express";
import { createCategory, deleteCategory, getAllCategory } from '../controllers/category.controllers.js'


const router = express();

// ruta que crea una nueva categoria
router.post("/category", createCategory );

// ruta que me obtiene todas las categorias
router.get("/category", getAllCategory);

// ruta que elimina una categoria 
router.delete("/category/:id", deleteCategory )




export default router;