import express from "express";
import Products from "../models/products.js";

const router = express();

router.post("/product", (req, res) => {
    const newProduct =  Products(req.body);
    newProduct.save()
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json({ message: err })
    })
})

export default router;