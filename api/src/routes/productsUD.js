import express from "express";
import Products from "../models/products.js";

const router = express();

router.put("/product/:id", async (req, res) => {
    try {
        let { id } = req.params
        let { name, category, stock, description, price, image, condition } = req.body
        
        await Products.updateOne({ _id: id }, {$set: {name, category, stock, description, price, image, condition}})
        res.status(200).send("Producto actualizado!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


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