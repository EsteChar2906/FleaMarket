import express from "express";
import Products from "../models/products.js";

const router = express();

router.post("/product", async (req, res) => {
    /* const newProduct =  Products(req.body);
    newProduct.save()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({ message: err })
    }) */
    try {
        const newProduct = Products(req.body);
        await newProduct.save()
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;