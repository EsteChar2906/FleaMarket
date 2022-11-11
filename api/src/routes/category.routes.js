import express from "express";
import Category from "../models/category.js";

const router = express();

// ruta que crea una nueva categoria
router.post("/category", async (req, res) => {
    try {
        const newCategory = Category(req.body);
        await newCategory.save()
        return res.json(newCategory);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// ruta que me obtiene todas las categorias
router.get("/category", async (req, res) => {
    try {
        const categories = await Category.find();
        return res.json(categories);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

// ruta que elimina una categoria 
router.delete("/category/:id", async (req, res) => {
    try {
        let { id } = req.params
        await Category.deleteOne({ _id: id })
        res.status(200).send("categoria eliminada!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})




export default router;