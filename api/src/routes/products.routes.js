import express from "express";
import Products from "../models/products.js";

const router = express();

// ruta para crear un producto 
router.post("/product", async (req, res) => {
    try {
        const newProduct = Products(req.body);
        await newProduct.save()
        return res.json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// ruta que me trae todos los productos con su usuario y su categoria
// Tambien me bsuca por title del producto (query), utilizando la misma ruta con el query: http://localhost:3001/api/products?name=
router.get("/products", async (req, res) => {
    try {
        const { name } = req.query; 
        const products= await Products.find({ title: { $regex: name, $options: "i" } }).populate('user').populate('category');
    
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

// ruta que me trae el detalle de un producto, incluyendo, user y category
router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const found = await Products.findById(id).populate('user').populate('category');
        if (found) {
            return res.json(found)
        } else {
            return res.status(500).send("No se encontraron datos");
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// Route para actualizar un producto 
router.put("/product/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, category, stock, description, price, image, condition } = req.body
        await Products.updateOne({ _id: id }, {$set: {name, category, stock, description, price, image, condition}})
        res.status(200).send("Producto actualizado!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Route para eliminar un producto por id
router.delete("/product/:id", async (req, res) => {
    try {
        let { id } = req.params
        await Products.deleteOne({ _id: id })
        res.status(200).send("Producto removido!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;