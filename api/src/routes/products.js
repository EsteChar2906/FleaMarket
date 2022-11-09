import express from "express";
import Products from "../models/products.js";

const router = express();

// Route de detalle por params
router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const found = await Products.findById(id);
        if (found) {
            return res.json(found)
        } else {
            return res.status(500).send("No se encontraron datos");
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.post("/product", async (req, res) => {
    try {
        const newProduct = Products(req.body);
        await newProduct.save()
        return res.json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get("/product", async (req, res) => {
    try {
        const { name } = req.query; //http://localhost:3001/api/product?name=_____
        if(name){
            const allCoincidence= await Products.find({ name: name });
            return res.json(allCoincidence);
        }

        const allProducts = await Products.find()
        return res.json(allProducts)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});





export default router;